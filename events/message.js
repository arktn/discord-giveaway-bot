module.exports = (client, message) => {

    var prefix = client.config.prefix

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    //checks if the message didn't start with prefix 
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command) || client.commands.find(al => al.aliases && al.aliases.includes(command));
    // checks if the command has a aliases 
  
    if (!cmd) return;

    if (message.channel.type === 'dm') return;
    // checks if the message was from a dm so he return cuz this will make the bot crash every time you send a message in dm
        // or you can use if (!message.guild) return; so he checks if the message was not from a guild
    try {
    cmd.run(client, message, args);
    } catch (error) {
    message.reply("there was an error with the command")
    console.log(error)
   }
// checks if there was an error in the command 
};
