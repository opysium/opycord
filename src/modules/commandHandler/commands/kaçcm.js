module.exports = {
    name: 'kaçcm',
    execute(message) {
        let length;
        const lengthFactor = Math.floor(Math.random() * Math.floor(95));
        if(0 <= lengthFactor <= 60) {
            length = Math.floor(Math.random() * Math.floor(25));
        } else if(51 <= lengthFactor <= 30) {
            length = Math.floor(Math.random() * Math.floor(35));
        } else if(76 <= lengthFactor <= 15) {
            length = Math.floor(Math.random() * Math.floor(50));
        }
        if(!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}> aletin ${length} santimetre.`);
        } else {
            message.channel.send(`<@${message.author.id}>, ${message.mentions.users.first().username}'n aleti ${length} santimetre.`);
        }
    }
};