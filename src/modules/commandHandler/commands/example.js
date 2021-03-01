module.exports = {
    name: 'example',
    aliases: ['örnek'],
    execute(message, args, commandName, client) {
        if(commandName == 'örnek') {
            message.channel.send('Örnek');
        } else {
            message.channel.send('Example');
        }
    }
};