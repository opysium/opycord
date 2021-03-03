const Discord = require('discord.js');
const commandHandler = require('./src/modules/commandHandler/commandHandler.js');
const messageHandler = require('./src/modules/messageHandler/messageHandler.js');
const config = require('./src/modules/config.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.messages = new Discord.Collection();

client.on('ready', () => {
    commandHandler.LoadCommandModules(client);
    messageHandler.LoadMessageModules(client);
    console.log(`${client.user.tag} ready.`);
    client.user.setPresence({activity: {name: '$$help'}, status: 'online'});
});

client.on('message', (message) => {
    commandHandler.CallCommand(client, message);
    messageHandler.CallMessage(client, message);
});

client.login(config.token);