const Discord = require("discord.js");
const usefulFunctions = require('../../usefulFunctions.js');

module.exports = {
    name: 'avatar',
    aliases: ['av'],
    async execute(message, args, commandName, client) {
        let embed  = new Discord.MessageEmbed();
        if(!args[0]) {
            embed.setTitle('Avatar')
                .setDescription(`<@${message.author.id}>'s avatar.`)
                .setImage(message.author.avatarURL({size: 512}));
        } else if(args[0] == 'help') {
            embed.setTitle('Avatar')
                .setDescription('Avatar command sends the avatar of your or selected user. If you just write avatar command without any arguments it will send your own avatar, to select a user you can tag them in command or use their Discord ID.')
                .addFields({name: 'Arguments', value: 'help'});
        } else {
            let user = await usefulFunctions.FindUser(message, args[0]);
            if(!user) {
                embed.setTitle('Error')
                    .setDescription(`Sorry <@${message.author.id}>, ${args[0]} is not a valid user ID.`);
            } else {
                embed.setTitle('Avatar')
                    .setDescription(`<@${user.id}>'s avatar requested by <@${message.author.id}>`)
                    .setImage(user.avatarURL({size: 512}));
            }
        }
        message.channel.send(embed);
    }
}