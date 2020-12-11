
const Discord = require('discord.js');
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes

  if (message.member.hasPermission('KICK_MEMBERS')){
      
      // Easy way to get member object though mentions.
      var mention = message.mentions.members.first();
      // Kick
    if (mention == undefined) {
        message.channel.send("specify a user please.")
    } else {
      mention.kick().then((member) => {
          // Successmessage
          message.delete();
          message.channel.send(":wave: " + mention.displayName + " has been successfully kicked!");
      }).catch(() => {
          // Failmessage
          message.channel.send("I can't!");
      });
    }
  } else {
    message.reply("you do not have permission to do this.");
  }
  
}

//name this whatever the command name is.
module.exports.help = {
  name: "kick"
}