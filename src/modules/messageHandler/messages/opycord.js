const randomMessages = ['At your service, sir.', 'Yes, sir.'];

module.exports = {
    name: 'opycord',
    aliases: [],
    execute(message, client) {
        const randomMessage = randomMessages[Math.floor(Math.random() * Math.floor(randomMessages.length))];
        message.channel.send(randomMessage);
    }
};