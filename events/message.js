module.exports = (client, message) => {
    
    const prefix = client.config.prefix;

    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    
    if (!cmd) return;


    if (message.channel.type === 'dm') return;
  
    try {
        cmd.run(client, message, args);
    } catch (error) {
        message.reply("An error occurred while attempting to execute this command.");
        console.log(error);
   }
};
