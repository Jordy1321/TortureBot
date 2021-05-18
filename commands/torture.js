const { tortureMessages } = require("../data/tortureMessages.json")

module.exports = {
    name: 'torture',
    description: "this is a ping command!",
    async execute(message, args, client) {
        var user;
        if (args.length === 0) {
            user = message.author;
        } else {
            user = message.mentions.users.first() || client.users.cache.get(args[0])
        }
        let randomText = Math.floor(Math.random() * tortureMessages.length) // Custom message
        client.tortureUsed += 1
        message.channel.send(`reply ${client.tortureUsed}\n${user} ` + tortureMessages[randomText]);
        client.user.setActivity(`${client.tortureUsed}`)
    }
}