const Discord = require('discord.js');
const client = new Discord.Client();

const dotenv = require('dotenv');
dotenv.config();
const config = {
    token: process.env.token,
    prefix: process.env.token
};

client.on('ready', () => {
    console.log(`${client.user.tag} ready.`);
});

client.login(config.token);