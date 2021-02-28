const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandHandler = require('./src/modules/commandHandler/commandHandler.js');

const config = require('./src/modules/config/config.js');

client.on('ready', () => {
    commandHandler.LoadCommandModules(client);
    console.log(`${client.user.tag} ready.`);
});

client.on('message', (message) => {
    commandHandler.CallCommand(client, message);
});

client.login(config.token);