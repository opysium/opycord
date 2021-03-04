const happyMessages = ['At your service, sir.', 'Yes, sir.'];
const unhappyMessages = ['Yes?', 'What?', '?'];
let botStatus = 0;
// 0 happy 1 unhappy

module.exports.startInterval = function() {
    this.setRandomStatus();
    setInterval(this.setRandomStatus, 3600000);
}

module.exports.setRandomStatus = function() {
    botStatus = Math.floor(Math.random() * Math.floor(2));
    console.log(`random status: ${botStatus}`);
    return botStatus;
}

module.exports.SelectMessage = function() {
    if(botStatus == 0) {
        return happyMessages[Math.floor(Math.random() * Math.floor(happyMessages.length))];
    } else {
        return unhappyMessages[Math.floor(Math.random() * Math.floor(unhappyMessages.length))];
    }
}