const fs = require('fs');
const config = require('../config.js');

module.exports.LoadCommandModules = function(client) {
    const commandModules = fs.readdirSync('./src/modules/commandHandler/commands/').filter(file => file.endsWith('.js'));
    for(const commandModule of commandModules) {
        const command = require(`./commands/${commandModule}`);
        client.commands.set(command.name, command);
        console.log(`${commandModule} command module loaded.`);
    }
};

module.exports.CallCommand = function(client, message) {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;
    else command.execute(message, args, commandName, client);
};