const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")
module.exports = {
  config: {
    name: "help",
    description: "Get a list of bot commands.",
    usage: "help",
    category: "Main",
    accessableby: "Everyone",
    aliases: [], // To add custom aliases just type ["alias1", "alias2"].
  },
  run: async (client, message, args) => {
    let avatarOptions = {
      format: 'png',
      dynamic: true,
      size: 1024
    }

    const embed = new MessageEmbed()
      .setAuthor(
        client.user.username,
        client.user.displayAvatarURL({ ...avatarOptions }),
        'https://github.com/schnappi21/discord-giveaway-bot'
      )
      .setThumbnail(client.user.displayAvatarURL({ ...avatarOptions }))
      .setTitle('Help')
      .setURL('https://github.com/schnappi21/discord-giveaway-bot')
      .setColor('7289da')
      .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://github.com/schnappi21/discord-giveaway-bot)`)
      .addFields({
        name: `🎉 ${config["Bot_Info"].prefix}start [channel] [duration] [winners] [prize]`,
        value: [
          'The channel has to be visible to the giveaway bot.',
          'Duration is stated in a number and a time variable.',
          'Winners is stated in a positive number.',
          'Prize can be anything except blank.'
        ].join('\n')
      }, {
        name: '👥 Example:',
        value: [
          `⌨️ ${config["Bot_Info"].prefix}start #general 10m 1 $9.99 Nitro`,
          `➡️ Creates a \`10 minute\` long giveaway with \`1\` winner and`,
          `\`$9.99 Nitro\` as a prize in \`#general\`.`
        ].join('\n')
      }, {
        name: `❌ ${config["Bot_Info"].prefix}end [message-id]`,
        value: 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**'
      }, {
        name: '👥 Example:',
        value: `⌨️ ${config["Bot_Info"].prefix}end 892678258946659587\n➡️ Ends the giveaway with the message-ID \`892678258946659587\`.`
      }, {
        name: `🔍 ${config["Bot_Info"].prefix}reroll [message-id]`,
        value: 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**'
      }, {
        name: '👥 Example:',
        value: `⌨️ ${config["Bot_Info"].prefix}reroll 892678258946659587\n➡️ Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`
      })
      .setFooter('Made with 💖 and discord.js by fez', client.user.displayAvatarURL({ ...avatarOptions }))

    if (message.guild) {
      message.channel.send('Check your DMs!');
      message.delete();
      message.author.send(embed);
    } else {
      message.author.send(embed)
    }
  },
};
