module.exports = {
    name: 'ping',
    aliases: ['pingo'],
    execute(message) {
        message.channel.send(`Pong!`);
    }
};