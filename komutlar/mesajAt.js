//Octopus by R4dar
//
//v2

const winston = require('winston')
var logger = new (winston.Logger)({
})
exports.run = function (Octopus, message, args, args2, cmd) {
    const Discord = require('discord.js');
    const main = require("../Main.json");
    var guild = message.guild;
	var prefix = main.prefix;
    let user = message.mentions.users.first()
    const embed1 = new Discord.RichEmbed()
        .setColor("#f0ffff")
        .setDescription("**Komut: **" + `${prefix}mesajAt`)
        .addField("**Kullanım:**", `${prefix}mesajAt <@Kullanıcı> <Mesajınız>`)
        .addField("**Örnek:**", `${prefix}mesajAt @Saurien#6420 Nasılsın?`)
    if (!user || args2.join(' ') == "") return message.channel.send({embed: embed1})
    const embed = new Discord.RichEmbed()
        .setColor("#008000")
        .setTitle(`${message.author.username} Kişisinden Yeni Mesajınız Var`)
        .setDescription(`Mesaja Yanıt Vermek İçin ${prefix}mesajAt Komutunu Kullanınız`)
        .setThumbnail(message.author.avatarURL)
        .addField("Mesajı:", args2.join(' '))
        .setTimestamp()
    user.send({ embed: embed })
    message.delete(2)
    message.reply("Mesaj Yollandı!")   
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mesajAt'
};