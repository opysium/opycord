module.exports = {
    name: 'kaçcm',
    execute(message) {
        let length;
        const lengthFactor = {
            0: function() {
                length = Math.floor(Math.random() * Math.floor(25));
            },
            1: function() {
                length = Math.floor(Math.random() * Math.floor(37));
            },
            2: function() {
                length = Math.floor(Math.random() * Math.floor(50));
            }
        };
        lengthFactor[Math.floor(Math.random() * Math.floor(3))]();
        if(!message.mentions.users.first()) {
            message.channel.send(`<@${message.author.id}> aletin ${length} santimetre.`);
        } else {
            message.channel.send(`<@${message.author.id}>, ${message.mentions.users.first().username}'n aleti ${length} santimetre.`);
        }
    }
};