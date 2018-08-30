//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const main = require('../Main.json');

exports.run = (Octopus, message, args) => {
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **Kime Yumruk Atacağımı Yaz**');
    }
    var slap = new Discord.RichEmbed()
      .setTitle("Sinirlendi Geliyor Yumruk")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** Kullanıcısı "+"**"+member+"**"+" Kullanıcısını Yumrukladı")
      .setImage("https://media.giphy.com/media/utNbq8hMRng7S/giphy.gif");

    message.channel.sendEmbed(slap);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yumrukAt'
};
