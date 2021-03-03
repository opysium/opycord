const Discord = require('discord.js');

module.exports = {
    name: 'dice',
    aliases: [],
    execute(message, args, commandName, client) {
        let embed = new Discord.MessageEmbed().setTitle('Dice');
        if(args[0] == 'help') {
            embed.setDescription('Rolls one or two dices depends on what argument you assing, it will roll one dice if you don\'t assign any arguments.')
                .addFields(
                    {name: 'Arguments', value: 'single, double, help', inline: true}
                );
        } else {
            let randomDice1 = Math.floor(Math.random() * Math.floor(6) + 1);
            if(!args[0] || args[0] == 'single') {
                embed.setDescription(`<@${message.author.id}> has rolled a dice and landed on ${randomDice1}.`);
            } else if(args[0] == 'double') {
                let randomDice2 = Math.floor(Math.random() * Math.floor(6) + 1);
                embed.setDescription(`<@${message.author.id}> has rolled two dices and landed on ${randomDice1} ${randomDice2}.`);
            }
        }
        message.channel.send(embed);
    }
}