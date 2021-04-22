const ms = require('ms');

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':boom: You need to have the manage messages permissions to reroll giveaways.');
    }

    if(!args[0]){
        return message.channel.send(':boom: Uh oh, I couldn\'t find that message! Try again!');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send(':boom: Hm. I can\'t seem to find a giveaway for `'+ args.join(' ') +'`.');
    }

    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send('Giveaway rerolled!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} has not ended.`)){
            message.channel.send('This giveaway has not ended!');
        } else {
            console.error(e);
            message.channel.send('An error occured...');
        }
    });

};
