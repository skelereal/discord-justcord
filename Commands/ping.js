module.exports = {
    name: 'ping',
    description: "misunderstands and say other things",
    execute(message, args){
        message.channel.send('pong is rigged');
    }
}