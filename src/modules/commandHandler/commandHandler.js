const fs = require('fs');
const config = require('../config.js');
const cooldowns = require('../cooldown.js');

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
    if(!command) return 0;
    else {
        if(cooldowns.addCooldown(client, message.author)) return 0;
        else command.execute(message, args, commandName, client);
    }
    return 1;
};