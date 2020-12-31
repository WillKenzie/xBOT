const Discord = require('discord.js')
const env = require('dotenv')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  if (message.member.user.id == process.env.OWNER)
  {
    message.reply('The bot will now shut down.\n'
                            + 'Confirm with a thumb up or deny with a thumb down.');

      // Reacts so the user only have to click the emojis
      message.react('👍').then(r => {
            message.react('👎');
      });

      // First argument is a filter function
      message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
        { max: 1, time: 30000 }).then(collected => {
          if (collected.first().emoji.name == '👍') {
            message.reply('Shutting down...');
              bot.destroy();
          } else
            message.reply('Operation canceled.');
          });

  } else {
    message.channel.send("only the bot owner can do this.");
  }
}

//name this whatever the command name is.
module.exports.help = {
  name: "exit",
  aliases: ["stop"]
}
