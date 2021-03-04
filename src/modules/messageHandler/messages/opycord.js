const random = require('random');
const randomMessages = ['At your service, sir.', 'Yes, sir.', 'I\'m busy.', 'Fuck off.', '?'];

module.exports = {
    name: 'opycord',
    aliases: [],
    async execute(message, client) {
        message.channel.send(randomMessages[random.int(0, randomMessages.length)]);
    }
};