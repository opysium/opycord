const fs = require('fs');
const config = require('../config.js');

module.exports.LoadMessageModules = function(client) {
    const messageModules = fs.readdirSync('./src/modules/messageHandler/messages/').filter(file => file.endsWith('.js'));
    for(const messageModule of messageModules) {
        const message = require(`./messages/${messageModule}`);
        client.messages.set(message.name, message);
        console.log(`${messageModule} message module loaded.`);
    }
}

module.exports.CallMessage = function(client, message) {
    const thisMessage = client.messages.get(message.content) || client.messages.find(msg => msg.aliases && msg.aliases.includes(message.content));
    if(!thisMessage) return 0;
    else thisMessage.execute(message, client);
    return 1;
}