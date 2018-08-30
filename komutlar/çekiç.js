//Octopus by R4dar
//
//v2

const Discord = require('discord.js');

exports.run = (Octopus, message, args) => {
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **Çekici Kime Fırlatcam Onu Yaz**');
    }
    const embed = new Discord.RichEmbed()
      .setTitle("Kavgada Ok Fırlatanı Gördüm Balta Savuranı Gördümde Çekiç Atmak Ne AQ")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** Kavgada "+"**"+member+"**"+" Kullanıcısına Çekiç Fırlattı")
      .setImage("https://media.giphy.com/media/3o6gEcURoGKvjYwwyA/giphy.gif");
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiç'
};
