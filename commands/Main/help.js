const { MessageEmbed } = require("discord.js");
const { Bot_Info: { prefix } } = require('../../config.json')

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
    const { commands } = message.client;

      message.channel.send('Check your DMs!').then((msg) => msg.delete());
      const options = {
        format: 'png', 
        dynamic: true, 
        size: 1024
      };
      const LINK = 'https://github.com/ghaku/discord-giveaway-bot';
      const BLURPLE = '7289da';

      const startCommand = commands.get('start');
      const endCommand = commands.get('end');
      const rerollCommand = commands.get('reroll');

      let embed = new MessageEmbed()
        .setAuthor(
          client.user.username, 
          client.user.displayAvatarURL({ ...options }), 
          LINK
        )
        .setThumbnail(client.user.displayAvatarURL({ ...options }))
        .setTitle('Help')
        .setURL(LINK)
        .setColor(BLURPLE)
        .setDescription([
          'You want to create a giveaway bot yourself?',
          `Check out our Github page!](${LINK})`
        ].join('\n'))
        .addField(
          `🎉 ${prefix}${startCommand.config.name} ${startCommand.config.usage}`,
          [
            'The channel has to be visible to the giveaway bot',
            'Duration is stated in a number and a time variable.',
            'Winners is stated in a positive number.',
            'Prize can be anything except blank.'
          ].join('\n'))
        .addField(
          '👥 Example:',
          [
            `⌨️ ${prefix}${startCommand.config.name} #general 10m 1 $9.99 Nitro`,
            '➡️ Creates a \`10 minute\` long giveaway with \`1\` winner and',
            '`$9.99 Nitro\` as a prize in \`#general\`.'
          ].join('\n'))
        .addField(
          `❌ ${prefix}${endCommand.config.name} `,
          [
            'Message-ID has to be the **ID** of the giveaway message.',
            '**Not the link!**'
          ].join('\n'))
        .addField(
          '👥 Example:',
        [
          `⌨️ ${prefix}end 892678258946659587`,
          `➡️ Ends the giveaway with the message-ID \`892678258946659587\`.`
        ].join('\n'))
        .addField(
          `🔍 ${prefix}${rerollCommand.config.name} `,
        [
          'Message-ID has to be the **ID** of the giveaway message',
          '**Not the link!**'
        ].join('\n'))
        .addField(
          '👥 Example:',
          [
            `⌨️ ${prefix}${rerollCommand.config.name} 892678258946659587`,
            `➡️ Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`
          ])
        .setFooter('Made with 💖 and discord.js by ghaku', client.user.displayAvatarURL({ ...options }))
      message.author.send(embed);
  },
};
