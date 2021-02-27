module.exports = {
    name: 'kaçcm',
    execute(message, args) {
        let length = Math.floor(Math.random() * Math.floor(50));
        if(!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}> aletin ${length} santimetre.`);
        } else {
            message.channel.send(`<@${message.author.id}>, ${message.mentions.users.first().username}'n aleti ${length} santimetre.`);
        }
    }
};