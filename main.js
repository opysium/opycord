const Discord = require('discord.js');
const commandHandler = require('./src/modules/commandHandler/commandHandler.js');
const config = require('./src/modules/config.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on('ready', () => {
    commandHandler.LoadCommandModules(client);
    console.log(`${client.user.tag} ready.`);
    client.user.setPresence({activity: {name: '$$help'}, status: 'online'});
});

client.on('message', (message) => {
    commandHandler.CallCommand(client, message);
});

client.login(config.token);