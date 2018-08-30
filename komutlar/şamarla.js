//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const main = require('../Main.json');

exports.run = (Octopus, message, args) => {
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **Kimi Şamarlamam Gerektiğini Yaz**');
    }
    var slap = new Discord.RichEmbed()
      .setTitle("Sinirlenmeye Başladı Şamar Yolda")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** Kullanıcısı"+"**"+member+"**"+" Kullanıcısını Şamarladı")
      .setImage("https://media.giphy.com/media/IYcXTDme1ZPMI/giphy.gif");

    message.channel.sendEmbed(slap);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şamarla'
};