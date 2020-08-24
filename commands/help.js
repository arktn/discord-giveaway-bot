// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message){
        if (message.guild) {
            message.channel.send('Check your DMs!');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/notmaxi/discord-giveaway-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
            .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://github.com/notmaxi/discord-giveaway-bot)`)
            .addField(`${prefix}giveaway [duration] [prize]`, 'Duration is statet in hours so it has to be a number and atleast 1.\nPrize can be anything but it has to be atleast one symbol.')
            .addField('Example:', `${prefix}giveaway 10 $9.99 Nitro\nCreates a 10 hour long giveaway with '$9.99 Nitro' as prize.`)
            .setFooter('Made with 💖 and discord.js by notmaxi', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
        if (!message.guild) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/notmaxi/discord-giveaway-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
            .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://github.com/notmaxi/discord-giveaway-bot)`)
            .addField(`${prefix}giveaway [duration] [prize]`, 'Duration is statet in hours so it has to be a number and atleast 1.\nPrize can be anything but it has to be atleast one symbol.')
            .addField('Example:', `${prefix}giveaway 10 $9.99 Nitro\nCreates a 10 hour long giveaway with '$9.99 Nitro' as prize.`)
            .setFooter('Made with 💖 and discord.js by notmaxi', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
}
