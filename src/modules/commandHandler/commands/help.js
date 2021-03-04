const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: [],
    execute(message, args, commandName, client) {
        let embed = new Discord.MessageEmbed();
        if(!args[0]) {
            embed.setTitle('Hi, I\'m Opycord')
                .setThumbnail(client.user.avatarURL())
                .setDescription('I am an Open Source Discord bot project, to see my source code please visit my repository page in GitHub.')
                .addFields(
                    {name: 'Repository', value: 'https://github.com/opysium/opycord'},
                    {name: 'Arguments', value: 'commands, messages'}
                );
        } else if(args[0] == 'commands') {
                embed.setTitle('Commands')
                    .setDescription('All commands are listed here. If you want to get more information about a specific command, add help argument to it.')
                    .addFields({name: 'Commands', value: 'help, dice, avatar'});
        } else if(args[0] == 'messages') {
            embed.setTitle('Messages')
                .setDescription('Messages are some funny things, they\'re like commands but works without prefixes.')
                .addFields({name: 'Messages', value: 'opycord'});
        }
        message.channel.send(embed);
    }
};