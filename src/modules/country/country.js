const fs = require('fs');
const Discord = require('discord.js');

module.exports.LoadCountries = function(client) {
    const countryModules = fs.readdirSync('./src/modules/country/countries').filter(file => file.endsWith('.js'));
    for(const countryModule of countryModules) {
        const country = require(`./countries/${countryModule}`);
        client.countries.set(country.name, country);
        console.log(`${countryModule} country module loaded.`);
    }
}

module.exports.CallCountry = function(client, input, message) {
    const country = client.countries.get(input) || client.countries.find(cntry => cntry.aliasNames && cntry.aliasNames.includes(input));
    if(!country) return;
    else {
        const embed = new Discord.MessageEmbed()
            .setTitle(country.name)
            .setDescription(country.description);
        message.channel.send(embed);
    }
}