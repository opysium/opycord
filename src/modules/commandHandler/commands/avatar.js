const Discord = require("discord.js");
const usefulFunctions = require('../../usefulFunctions.js');

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
        } else if(args[0] == 'help') {
            embed = new Discord.MessageEmbed()
                .setTitle('Avatar')
                .setDescription('Avatar command sends the avatar of your or selected user. If you just write avatar command without any arguments it will send your own avatar, to select a user you can tag them in command or use their Discord ID.')
                .addFields({name: 'Arguments', value: 'help'});
        } else {
            let user = await usefulFunctions.FindUser(message, args[0]);
            if(!user) {
                embed = new Discord.MessageEmbed()
                    .setTitle('Error')
                    .setDescription(`Sorry <@${message.author.id}>, ${args[0]} is not a valid user ID.`);
                message.channel.send(embed);
                return;
            } else {
                embed = new Discord.MessageEmbed()
                    .setTitle('Avatar')
                    .setDescription(`<@${user.id}>'s avatar requested by <@${message.author.id}>`)
                    .setImage(user.avatarURL({size: 512}));
            }
        }
        message.channel.send(embed);
    }
}