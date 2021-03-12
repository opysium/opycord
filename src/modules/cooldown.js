module.exports.addCooldown = function(client, user) {
    if(client.cooldowns.has(user.id)) return 1;
    else {
        client.cooldowns.set(user.id);
        setTimeout(removeCooldown, 5000, client, user);
        return 0;
    }
}

function removeCooldown(client, user) {
    client.cooldowns.delete(user.id);
}