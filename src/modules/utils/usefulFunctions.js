module.exports.FindUser = async function(message, input) {
    let findUser;
    if(message.mentions.users.first()) {
        findUser = message.mentions.users.first();
        return findUser;
    } else {
        findUser = await message.guild.members.fetch(input).catch(err => {});
        if(!findUser) {
            return;
        }
        return findUser.user;
    }
}
