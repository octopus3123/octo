const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

   if(!args[0]) return message.channel.send("**Kimi Öldüreceğimi Yazmalısın.**");
   let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

   let random = Math.random() * 3 + 1;
   var kill = Math.round(random)
   if (kill === 1) {
     let killEmbed = new Discord.RichEmbed()
     .setColor("#000000")
     .setDescription(`â¬‡ **${member}** Kullanicisini Ucurumdan Iterek Oldurdun `);
     message.channel.send(killEmbed)
   }
   if (kill === 2) {
     let killEmbed = new Discord.RichEmbed()
     .setColor("#000000")
     .setDescription(`ğŸ¦Š **${member}** Kullanicisinin Gotunu Delerek Oldurdun`);
     message.channel.send(killEmbed)
   }
   if (kill === 3) {
     let killEmbed = new Discord.RichEmbed()
     .setColor("#000000")
     .setDescription(`ğŸšš **${member}** Kullanicisinin Ustunden 1 Tonluk Kamyon Ile Gecerek Oldurdun`);
     message.channel.send(killEmbed)
   }
   if (kill === 4) {
     let killEmbed = new Discord.RichEmbed()
     .setColor("#000000")
     .setDescription(`ğŸ” **${member}** Kullanicisi Sana Dayanamayip Intahar Ederek Oldu`);
     message.channel.send(killEmbed)
   }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öldür'
};