const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['yardım'],
    execute(message, args, commandName, client) {
        let embed;
        if(!args[0]) {
            if(commandName == 'yardım') {
                embed = new Discord.MessageEmbed()
                .setTitle('Merhaba, benim adım Opycord')
                .setThumbnail(client.user.avatarURL())
                .setDescription('Açık kaynaklı bir Discord bot projesiyim, kaynak kodumu görmek için lütfen GitHub kaynak sayfamı ziyaret edin.')
                .addFields(
                    {name: 'Kaynak', value: 'https://github.com/opysium/opycord'},
                    {name: 'Parametreler', value: 'komutlar'}
                );
            } else {
                embed = new Discord.MessageEmbed()
                .setTitle('Hi, I\'m Opycord')
                .setThumbnail(client.user.avatarURL())
                .setDescription('I am an Open Source Discord bot project, to see my source code please visit my repository page in GitHub.')
                .addFields(
                    {name: 'Repository', value: 'https://github.com/opysium/opycord'},
                    {name: 'Arguments', value: 'commands'}
                );
            }
            message.channel.send(embed);
        } else if(args[0] == 'commands' || args[0] == 'cmd' || args[0] == 'komutlar') {
            if(commandName == 'yardım') {
                embed = new Discord.MessageEmbed()
                    .setTitle('Komutlar')
                    .setDescription('Burada yalnızca komutlar gösterilmektedir, komutların parametrelerini öğrenmek için o komuta \'yardım\' parametresini ekleyebilirsiniz.')
                    .addFields({name: 'Komutlar', value: 'yardım, zar'});
            } else {
                embed = new Discord.MessageEmbed()
                    .setTitle('Commands')
                    .setDescription('There is only commands you can see, to see argument of a specific command you can add \'help\' argument to it.')
                    .addFields({name: 'Commands', value: 'help, dice'});
            }
            message.channel.send(embed);
        }
    }
};