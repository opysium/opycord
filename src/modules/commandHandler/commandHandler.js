const fs = require('fs');

module.exports.LoadCommandModules = function(client) {
    const commandModules = fs.readdirSync('./src/modules/commandHandler/commands/').filter(file => file.endsWith('.js'));
    for(const commandModule of commandModules) {
        const command = require(`./commands/${commandModule}`);
        client.commands.set(command.name, command);
        console.log(`${commandModule} command module loaded.`);
    }
}

module.exports.CallCommand = function(client, config, message) {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
    if(!client.commands.has(command)) return;
    client.commands.get(command).execute(message, args);
}