const config = require('../../config/config.js');
const country = require('../../country/country.js');

module.exports = {
    name: 'country',
    aliases: ['ülke'],
    execute(message, args, commandName, client) {
        if(!args[0]) {
            message.channel.send(`<@${message.author.id}> bir ülke ismi girmelisin.`);
        } else {
            const input = message.content.substr(config.prefix.length + commandName.length + 1);
            country.CallCountry(client, input, message);
        }
    }
};