const Discord = require('discord.js');

module.exports = {
    name: 'dice',
    aliases: ['zar'],
    execute(message, args, commandName, client) {
        let embed;
        if(args[0] == 'help' || args[0] == 'yardım') {
            if(commandName == 'zar') {
                embed = new Discord.MessageEmbed()
                    .setTitle('Zar')
                    .setDescription('Tekli veya çiftli olarak zar atmanızı sağlar, herhangi bir parametre girmezseniz tek atacaktır.')
                    .addFields(
                        {name: 'Parametreler', value: 'tek, çift, yardım', inline: true},
                        {name: 'Diğer Adlar', value: 'dice(İngilizce)', inline: true}
                    );
            } else {
                embed = new Discord.MessageEmbed()
                    .setTitle('Dice')
                    .setDescription('Rolls one or two dices depends on what argument you assing, it will roll one dice if you don\'t assign any arguments.')
                    .addFields(
                        {name: 'Arguments', value: 'single, double, help', inline: true},
                        {name: 'Aliases', value: 'zar(Turkish)', inline: true}
                    );
            }
            message.channel.send(embed);
            return;
        }
        let randomDice1 = Math.floor(Math.random() * Math.floor(6) + 1);
        if(!args[0] || args[0] == 'single' || args[0] == 'tek') {
            if(commandName == 'zar') {
                embed = new Discord.MessageEmbed().setDescription(`<@${message.author.id}> bir zar attı ve ${randomDice1} geldi.`);
            } else {
                embed = new Discord.MessageEmbed().setDescription(`<@${message.author.id}> has rolled a dice and landed on ${randomDice1}.`);
            }
        } else if(args[0] == 'double' || args[0] == 'çift') {
            let randomDice2 = Math.floor(Math.random() * Math.floor(6) + 1);
            if(commandName == 'zar') {
                embed = new Discord.MessageEmbed().setDescription(`<@${message.author.id}> çift zar attı ve ${randomDice1} ${randomDice2} geldi.`);
            } else {
                embed = new Discord.MessageEmbed().setDescription(`<@${message.author.id}> has rolled two dices and landed on ${randomDice1} ${randomDice2}.`);
            }
        }
        message.channel.send(embed);
    }
}