// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'giveaway',
    execute(client, message){
        if (!message.guild) return;
        async function giveaway() {
            var time = '';
            var time2 = '';
            var time3 = '';
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You don\'t have permission to use this command.');
            if (message.content === `${prefix}giveaway`) return message.channel.send(`You didn\'t state a duration or a prize for the giveaway.`)
            if (message.content !== `${prefix}giveaway`) {
                const stated_duration_hours = message.content.split(' ')[1];
                const stated_duration_hours2 = stated_duration_hours.toLowerCase();
                if (stated_duration_hours2.includes('s')) {
                    var time = 's';
                }
                if (stated_duration_hours2.includes('m')) {
                    var time = 'm';
                }
                if (stated_duration_hours2.includes('h')) {
                    var time = 'h';
                }
                if (stated_duration_hours2.includes('d')) {
                    var time = 'd';
                }
                const stated_duration_hours3 = stated_duration_hours2.replace(time, '');
                if (stated_duration_hours3 === '0') {
                    message.channel.send('The duration has to be at least one.');
                }
                if (isNaN(stated_duration_hours3)) {
                    message.channel.send('The duration has to be a valid time variable.');
                }
                if (stated_duration_hours3 > 1) {
                    var time3 = 's';
                }
                if (time === 's') {
                    var actual_duration_hours = stated_duration_hours3 * 1000;
                    var time2 = 'second';
                }
                if (time === 'm') {
                    var actual_duration_hours = stated_duration_hours3 * 60000;
                    var time2 = 'minute';
                }
                if (time === 'h') {
                    var actual_duration_hours = stated_duration_hours3 * 3600000;
                    var time2 = 'hour';
                }
                if (time === 'd') {
                    var actual_duration_hours = stated_duration_hours3 * 86400000;
                    var time2 = 'day';
                }
                if (!isNaN(stated_duration_hours3)) {
                    const prize = message.content.split(' ').slice(2).join(' ');
                    if (prize === '') return message.channel.send('You have to enter a prize.');
                    if (stated_duration_hours3 !== '0') {
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${prize}`)
                        .setColor('36393F')
                        .setDescription(`React with 🎉 to enter!\nTime duration: **${stated_duration_hours3}** ${time2}${time3}\nHosted by: ${message.author}`)
                        .setTimestamp(Date.now() + (actual_duration_hours))
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
                }
            }
        }
        giveaway();
    }
}
