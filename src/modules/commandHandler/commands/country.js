const Discord = require('discord.js');
const config = require('../../config/config.js');

module.exports = {
    name: 'country',
    aliases: ['ülke'],
    execute(message, args, commandName, client) {
        let foundedCountry;
        if(!args[0]) {
            let randomCountry = Math.floor(Math.random() * Math.floor(206));
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
                    {name: 'Para Birimi', value: foundedCountry.currency, inline: true},
                    {name: 'beni doldur', value: 'beni doldur', inline: true}
                );
        message.channel.send(embed);
    }
}

const country = {
    0: {
        name: 'abhazya',
        aliasNames: ['abhazya cumhuriyeti'],
        displayName: 'Abhazya Cumhuriyeti',
        currency: 'Abhazya Apsarı ve Rus Rublesi',
        capital: 'Sohum',
        description: 'Gürcistan\'ın kuzeybatısında, Karadeniz\'in doğusunda tarihsel ülke. 1992\'deki savaşın ardından Gürcistan\'dan 1994 yılında bağımsızlığını ilan etmiş bir devlettir. BM tarafından tanınmamaktadır. Adını, bugün de bölgenin halklarından olan Abhazlardan alır. Abhazya, 8 bin 600 kilometrekarelik bir alanı kapsar. 2003 sayımına göre bölgede 220 bini aşkın kişi yaşamaktadır.',
        flagLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Republic_of_Abkhazia.svg/1280px-Flag_of_the_Republic_of_Abkhazia.svg.png'
    },
    1: {
        name: 'afganistan',
        aliasNames: ['afganistan islam cumhuriyeti'],
        displayName: 'Afganistan İslam Cumhuriyeti',
        currency: 'Afgani',
        capital: 'Kâbil',
        description: 'Orta Asya\'nın güneyinde denize kıyısı olmayan bir ülkedir. Doğu ve güneyde Pakistan; batıda İran; kuzeyde Türkmenistan, Özbekistan ve Tacikistan; kuzeydoğuda ise Çin ile komşudur, 652 bin kilometrekarelik yüzölçümlü, kuzey ve güneydoğusunu düzlüklerin oluşturduğu dağlık bir ülkedir. Başkenti ve en büyük şehri Kâbil\'dir. Yaklaşık 32 milyonluk nüfusunun çoğunluğunu Peştunlar, Tacikler, Hazaralar ve Özbekler oluşturur.',
        flagLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/1024px-Flag_of_Afghanistan.svg.png'
    },
    2: {
        name: 'almanya',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    3: {
        name: 'amerika birleşik devletleri',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    4: {
        name: 'andora',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    5: {
        name: 'angola',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    6: {
        name: 'antigua ve barbuda',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    7: {
        name: 'arjantin',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    8: {
        name: 'arnavutluk',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    9: {
        name: 'avustralya',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    10: {
        name: 'avusturya',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    11: {
        name: 'azerbaycan',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    12: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    13: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    14: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    15: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    16: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    17: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    18: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    19: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    20: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    21: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    22: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    23: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    24: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    25: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    26: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    27: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    28: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    29: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    30: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    31: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    32: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    33: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    34: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    35: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    36: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    37: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    38: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    39: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    40: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    41: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    42: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    43: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    44: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    45: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    46: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    47: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    48: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    49: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    50: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    51: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    52: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    53: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    54: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    55: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    56: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    57: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    58: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    59: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    60: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    61: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    62: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    63: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    64: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    65: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    66: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    67: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    68: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    69: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    70: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    71: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    72: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    73: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    74: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    75: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    76: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    77: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    78: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    79: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    80: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    81: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    82: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    83: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    84: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    85: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    86: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    87: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    88: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    89: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    90: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    91: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    92: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    93: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    94: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    95: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    96: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    97: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    98: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    99: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    100: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    101: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    102: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    103: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    104: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    105: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    106: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    107: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    108: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    109: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    110: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    111: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    112: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    113: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    114: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    115: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    116: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    117: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    118: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    119: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    120: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    121: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    122: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    123: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    124: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    125: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    126: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    127: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    128: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    129: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    130: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    131: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    132: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    133: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    134: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    135: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    136: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    137: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    138: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    139: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    140: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    141: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    142: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    143: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    144: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    145: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    146: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    147: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    148: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    149: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    150: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    151: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    152: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    153: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    154: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    155: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    156: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    157: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    158: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    159: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    160: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    161: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    162: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    163: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    164: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    165: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    166: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    167: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    168: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    169: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    170: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    171: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    172: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    173: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    174: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    175: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    176: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    177: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    178: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    179: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    180: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    181: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    182: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    183: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    184: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    185: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    186: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    187: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    188: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    189: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    190: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    191: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    192: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    193: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    194: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    195: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    196: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    197: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    198: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    199: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    200: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    201: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    202: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    203: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    204: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    },
    205: {
        name: '',
        aliasNames: [],
        displayName: '',
        currency: '',
        capital: '',
        description: '',
        flagLink: ''
    }
};