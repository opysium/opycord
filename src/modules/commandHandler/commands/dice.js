const Discord = require('discord.js');

module.exports = {
    name: 'dice',
    aliases: ['zar'],
    execute(message, args, commandName, client) {
        let randomDice1 = Math.floor(Math.random() * Math.floor(6) + 1);
        if(!args[0] || args[0] == 'single' || args[0] == 'tek') {
            if(commandName == 'zar') {
                message.channel.send(`<@${message.author.id}> bir zar attı ve ${randomDice1} geldi.`);
            } else {
                message.channel.send(`<@${message.author.id}> has rolled a dice and landed on ${randomDice1}.`);
            }
        } else if(args[0] == 'double' || args[0] == 'çift') {
            let randomDice2 = Math.floor(Math.random() * Math.floor(6) + 1);
            if(commandName == 'zar') {
                message.channel.send(`<@${message.author.id}> çift zar attı ve ${randomDice1} ${randomDice2} geldi.`);
            } else {
                message.channel.send(`<@${message.author.id}> has rolled two dices and landed on ${randomDice1} ${randomDice2}.`);
            }
        } else if(args[0] == 'help' || args[0] == 'yardım') {
            let embed;
            if(commandName == 'zar') {
                embed = new Discord.MessageEmbed()
                    .setTitle('Zar')
                    .setDescription('Tekli veya çiftli olarak zar atmanızı sağlar, herhangi bir parametre girmezseniz tek atacaktır.')
                    .addFields({name: 'Parametreler', value: 'tek, çift, yardım'});
                message.channel.send(embed);
            } else {
                embed = new Discord.MessageEmbed()
                    .setTitle('Dice')
                    .setDescription('Rolls one or two dices depends on what argument you assing, it will roll one dice if you don\'t assign any arguments.')
                    .addFields({name: 'Arguments', value: 'single, double, help'});
                    message.channel.send(embed);
            }
        }
    }
}