const Discord = require('discord.js');

module.exports = {
    name: 'eval',
    description: "this is a meme command!",
    async execute(message, args, client) {
        if (message.author.id == "346602043751792641" || message.author.id == "578736212064600084") {
            try {
                if (!args.join(" ")) {
                    message.channel.send("Say something to eval.")
                    return;
                }
                var code = args.join(" ")
                try {
                    let evaled = eval(code)
                    message.channel.send(
                        new Discord.MessageEmbed()
                            .setColor('#00FF00')
                            .setTitle("<@" + message.author + ">" + ' Eval output')
                            .addField('Input', `${code}`)
                            .addField('Output', `${evaled}`)
                            .setTimestamp()
                            .setFooter('your stupid bot name Eval')
                    )
                } catch (err) {
                    message.channel.send(
                        new Discord.MessageEmbed()
                            .setColor('#EB1C1C')
                            .setTitle("<@" + message.author + ">" + ' Eval output')
                            .addField('Input', `${code}`)
                            .addField('Output', `${err}`)
                            .setTimestamp()
                            .setFooter('your stupid bot name Eval')
                    )
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            message.reply(`no you can't do that`)
        }
    }
}