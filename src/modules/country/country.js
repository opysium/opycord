const fs = require('fs');

module.exports.LoadCountries = function(client) {
    const countryModules = fs.readdirSync('./src/modules/country/countries').filter(file => file.endsWith('.js'));
    for(const countryModule of countryModules) {
        const country = require(`./countries/${countryModule}`);
        client.countries.set(country.name, country);
        console.log(`${countryModule} country module loaded.`);
    }
}

module.exports.CallCountry = function(client, input, message) {
    return client.countries.get(input) || client.countries.find(cntry => cntry.aliasNames && cntry.aliasNames.includes(input));
}