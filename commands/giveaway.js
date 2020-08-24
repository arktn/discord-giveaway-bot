// Dependencies
let Discord = require('discord.js');

module.exports = {
    name: 'giveaway',
    execute(client, message){
        if (!message.guild) return;
        async function giveaway() {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You don\'t have enough permissions to use this command.');
            if (message.content.split(' ')[1] === '') return messages.channel.send('Please enter a duration for the giveaway (in hours).');
            const stated_duration_hours = message.content.split(' ')[1];
            const actual_duration_hours = stated_duration_hours * 3600000;
            const prize = message.content.split(' ').slice(2).join(' ');
            if (isNaN(stated_duration_hours)) return message.channel.send('The duration time has to be a number.');
            if (stated_duration_hours < 1) return message.channel.send('The duration time has to be atleast 1.');
            if (prize === '') return message.channel.send('You have to enter a price.');
            var hour_s = 'hour';
            if (stated_duration_hours > 1) {
                var hour_s = 'hours';
            }
            const embed = new Discord.MessageEmbed()
            .setTitle(`${prize}`)
            .setColor('36393F')
            .setDescription(`React with 🎉 to enter!\nTime duration: **${stated_duration_hours}** ${hour_s}\nHosted by: ${message.author}`)
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
        giveaway();
    }
}
