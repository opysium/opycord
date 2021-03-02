const Discord = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ['av'],
    async execute(message, args, commandName, client) {
        let embed;
        if(!args[0]) {
            embed = new Discord.MessageEmbed()
                .setTitle('Avatar')
                .setDescription(`<@${message.author.id}>'s avatar.`)
                .setImage(message.author.avatarURL({size: 512}));
            message.channel.send(embed);
        } else if(args[0] == 'help') {
            let embed = new Discord.MessageEmbed()
                .setTitle('Avatar')
                .setDescription('Avatar command sends the avatar of your or selected user. If you just write avatar command without any arguments it will send your own avatar, to select a user you can tag them in command or use their Discord ID.')
                .addFields(
                    {name: 'Arguments', value: 'help'}
                )
        } else if(args[0]) {
            let userInfo;
            if(message.mentions.users.first()) {
                userInfo = message.mentions.users.first();
                embed = new Discord.MessageEmbed()
                    .setTitle('Avatar')
                    .setDescription(`<@${userInfo.id}>'s avatar requested by <@${message.author.id}>`)
                    .setImage(userInfo.avatarURL({size:512}));
                message.channel.send(embed);
            } else {
                userInfo = await message.guild.members.fetch(args[0]).catch(err => {});
                if(!userInfo) {
                    embed = new Discord.MessageEmbed()
                        .setTitle('Error')
                        .setDescription(`Sorry <@${message.author.id}>, ${args[0]} is not a valid user ID.`);
                    message.channel.send(embed);
                    return;
                }
                embed = new Discord.MessageEmbed()
                    .setTitle('Avatar')
                    .setDescription(`<@${userInfo.user.id}>'s avatar requested by <@${message.author.id}>`)
                    .setImage(userInfo.user.avatarURL({size: 512}));
            }
            message.channel.send(embed);
        }
    }
}