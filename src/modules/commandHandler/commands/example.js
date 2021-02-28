module.exports = {
    name: 'example',
    aliases: ['örnek'],
    execute(message, args, commandName, client) {
        message.channel.send('Example');
    }
};