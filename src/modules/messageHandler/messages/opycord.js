const randomMessages = ['At your service, sir.', 'Yes, sir.', 'I\'m busy.', 'Fuck off.', '?'];

module.exports = {
    name: 'opycord',
    aliases: [],
    async execute(message, client) {
        message.channel.send(randomMessages[Math.floor(Math.random() * Math.floor(randomMessages.length))]);
    }
};