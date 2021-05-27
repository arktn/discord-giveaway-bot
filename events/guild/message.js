const config = require("../../config.json");


module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === "dm") return;

    let args = message.content.slice(config["Bot_Info"].prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.channel.send(`Try ${config["Bot_Info"].prefix}help to see a list of my commands.`)
    if (!message.content.startsWith(config["Bot_Info"].prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if (commandfile) commandfile.run(client, message, args)
}

