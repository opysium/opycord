module.exports = {
    name: 'kaçcm',
    execute(message) {
        let length;
        switch(Math.floor(Math.random() * Math.floor(3))) {
            case 0: {
                length = Math.floor(Math.random() * Math.floor(25));
            }
            case 1: {
                length = Math.floor(Math.random() * Math.floor(35));
            }
            case 2: {
                length = Math.floor(Math.random() * Math.floor(50));
            }
        }
        if(!message.mentions.users.first()) {
            message.channel.send(`Aletin ${length} santimetre.`);
        } else {
            message.channel.send(`${message.mentions.users.first().username}'n aleti ${length} santimetre.`);
        }
    }
};