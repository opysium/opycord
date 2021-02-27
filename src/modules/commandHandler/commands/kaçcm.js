module.exports = {
    name: 'kaçcm',
    execute(message) {
        let length;
        switch(Math.floor(Math.random() * Math.floor(3))) {
            case 0: {
                length = Math.floor(Math.random() * Math.floor(25));
                break;
            }
            case 1: {
                length = Math.floor(Math.random() * Math.floor(35));
                break;
            }
            case 2: {
                length = Math.floor(Math.random() * Math.floor(50));
                break;
            }
        }
        if(!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}> aletin ${length} santimetre.`);
        } else {
            message.channel.send(`<@${message.author.id}>, ${message.mentions.users.first().username}'n aleti ${length} santimetre.`);
        }
    }
};