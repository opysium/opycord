const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandHandler = require('./src/modules/commandHandler/commandHandler.js');

const dotenv = require('dotenv');
dotenv.config();
const config = {
    token: process.env.token,
    prefix: process.env.prefix
};

client.on('ready', () => {
    commandHandler.LoadCommandModules(client);
    console.log(`${client.user.tag} ready.`);
});

client.on('message', (message) => {
    commandHandler.CallCommand(client, config, message);
});

client.login(config.token);