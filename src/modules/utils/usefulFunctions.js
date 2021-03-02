module.exports.FindUser = async function(message, input) {
    if(message.mentions.users.first()) {
        return message.mentions.users.first();
    } else {
        let findUser = await message.guild.members.fetch(input).catch(err => {});
        if(!findUser) {
            return;
        }
        return findUser.user;
    }
}