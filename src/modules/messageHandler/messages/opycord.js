const botStatus = require('../../status.js');

module.exports = {
    name: 'opycord',
    aliases: [],
    async execute(message, client) {
        const randomMessage = await botStatus.SelectMessage();
        message.channel.send(randomMessage);
    }
};