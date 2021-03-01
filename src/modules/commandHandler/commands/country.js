const Discord = require('discord.js');
const config = require('../../config/config.js');

module.exports = {
    name: 'country',
    aliases: ['ülke'],
    execute(message, args, commandName, client) {
        let foundedCountry;
        if(!args[0]) {
            let randomCountry = Math.floor(Math.random() * Math.floor(5));
            foundedCountry = country[randomCountry];
        } else {
            const input = message.content.toLowerCase().substr(config.prefix.length + commandName.length + 1);
            for(let i = 0; i < 206; i++) {
                if(input == country[i].name || country[i].aliasNames.includes(input)) {
                    foundedCountry = country[i];
                    break;
                }
            }
        }
        if(!foundedCountry) {
            message.channel.send(`<@${message.author.id}> bu isimde bir ülke bulunamadı.`);
            return;
        }
        const embed = new Discord.MessageEmbed()
                .setTitle(foundedCountry.displayName)
                .setThumbnail(foundedCountry.flagLink)
                .setDescription(foundedCountry.description)
                .addFields(
                    {name: 'Başkent', value: foundedCountry.capital, inline: true},
                    {name: 'Yüzölçümü', value: foundedCountry.area, inline: true},
                    {name: 'Nüfus', value: foundedCountry.population, inline: true}
                )
                .addFields(
                    {name: 'Para Birimi', value: foundedCountry.currency, inline: true},
                    {name: 'GSYİH', value: foundedCountry.gdp, inline: true}
                );
        message.channel.send(embed);
    }
}

const country = {
    0: {
        name: 'abhazya',
        aliasNames: ['abhazya cumhuriyeti'],
        displayName: 'Abhazya Cumhuriyeti',
        flagLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Republic_of_Abkhazia.svg/1280px-Flag_of_the_Republic_of_Abkhazia.svg.png',
        description: 'Gürcistan\'ın kuzeybatısında, Karadeniz\'in doğusunda tarihsel ülke. 1992\'deki savaşın ardından Gürcistan\'dan 1994 yılında bağımsızlığını ilan etmiş bir devlettir. BM tarafından tanınmamaktadır. Adını, bugün de bölgenin halklarından olan Abhazlardan alır.',
        capital: 'Sohum',
        area: '8 bin 432 kilometrekare',
        population: '243 bin',
        currency: 'Abhazya Apsarı ve Rus Rublesi',
        gdp: '500 milyon dolar (2009)'
    },
    1: {
        name: 'afganistan',
        aliasNames: ['afganistan islam cumhuriyeti', 'afganistan islam', 'afganistan cumhuriyeti'],
        displayName: 'Afganistan İslam Cumhuriyeti',
        flagLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/1024px-Flag_of_Afghanistan.svg.png',
        description: 'Orta Asya\'nın güneyinde denize kıyısı olmayan bir ülkedir. Doğu ve güneyse Pakistan; batıda İran; kuzeyde Türkmenistan, Özbekistan ve Tacikistan; kuzeydoğuda ise Çin ile komşudur. Kuzey ve güneydoğusunu düzlüklerinde oluşturduğu dağlık bir ülkedir. Nüfusnun çoğunluğunu Peştunlar, Tacikler, Hazaralar ve Özbekler oluşturur.',
        capital: 'Kâbil',
        area: '652 bin 864 kilometrekare.',
        population: '32 milyon 225 bin',
        currency: 'Afgani',
        gdp: '19 milyar dolar (2020)'
    }
};