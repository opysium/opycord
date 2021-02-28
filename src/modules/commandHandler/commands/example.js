module.exports = {
    name: 'example',
    aliases: ['örnek'],
    execute(message, args) {
        message.channel.send('Example');
    }
};