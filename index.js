const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  client.user.setActivity(`with ${prefix}giveaway & ${prefix}help`, { type: 'PLAYING' });
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'giveaway')) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You don\'t have enough permissions to use this command.');
  if (message.content.split(' ')[1] === '') return messages.channel.send('Please enter a duration for the giveaway (in hours).');
  const stated_duration_hours = message.content.split(' ')[1];
  const actual_duration_hours = stated_duration_hours * 3600000;
  const prize = message.content.split(' ').slice(2).join(' ');
  if (isNaN(stated_duration_hours)) return message.channel.send('The duration time has to be a number.');
  if (stated_duration_hours < 1) return message.channel.send('The duration time has to be atleast 1.');
  if (prize === '') return message.channel.send('You have to enter a price.');
  const embed = new Discord.MessageEmbed()
  .setTitle(`${prize}`)
  .setColor('36393F')
  .setDescription(`React with 🎉 to enter!\nTime duration: **${stated_duration_hours}** hours\nHosted by: ${message.author}`)
  .setTimestamp(Date.now() + (stated_duration_hours *60*60*1000))
  .setFooter('Ends at')
  let msg = await message.channel.send(':tada: **GIVEAWAY** :tada:', embed)
  await msg.react('🎉')
  setTimeout(() => {
    msg.reactions.cache.get('🎉').users.remove(client.user.id)
    setTimeout(() => {
    let winner = msg.reactions.cache.get('🎉').users.cache.random();
    if (msg.reactions.cache.get('🎉').users.cache.size < 1) {
      const winner_embed = new Discord.MessageEmbed()
      .setTitle(`${prize}`)
      .setColor('36393F')
      .setDescription(`Winner:\nNo one entered the giveaway.\nHosted by: ${message.author}`)
      .setTimestamp()
      .setFooter('Ended at')
      msg.edit(':tada: **GIVEAWAY ENDED** :tada:', winner_embed);
    }
    if (!msg.reactions.cache.get('🎉').users.cache.size < 1) {
    const winner_embed = new Discord.MessageEmbed()
    .setTitle(`${prize}`)
    .setColor('36393F')
    .setDescription(`Winner:\n${winner}\nHosted by: ${message.author}`)
    .setTimestamp()
    .setFooter('Ended at')
    msg.edit(':tada: **GIVEAWAY ENDED** :tada:', winner_embed);
    }
  }, 1000);
  }, actual_duration_hours);
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'help')) {
  if (message.guild) {
  message.channel.send('Check your DMs!');
  message.delete();
  const embed = new Discord.MessageEmbed()
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
    const embed = new Discord.MessageEmbed()
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
});

client.login(token);