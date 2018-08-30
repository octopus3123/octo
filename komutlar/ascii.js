//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(Octopus, message, args) => {
if(!args[0]) return message.reply('Lütfen Çevrilecek Bir Kelime Giriniz');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
              message.delete();
           })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ ],
  permLevel: 0
};

exports.help = {
  name: 'ascii'
};