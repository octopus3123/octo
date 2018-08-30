//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const main = require('../Main.json');
var prefix = main.prefix;
var botadi = main.botadi;

module.exports.run = async (Octopus, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Kategoriler")
	.addField("**(YENİ)** Müzik Komutları", prefix + "**" + "müzik**", true)
    .addField("Kullanıcı Komutları", prefix + "**" + "kullanıcı** `- Sayfa 1`" + "\n" + prefix + "**" + "kullanıcı2** `- Sayfa 2`" + "\n" + prefix + "**" + "kullanıcı3** `- Sayfa 3`", true)
    .addField("Eğlence Komutları", prefix + "**" + "eğlence** `- Sayfa 1`" + "\n" + prefix + "**" + "eğlence2** `- Sayfa 2`" + "\n" + prefix + "**" + "eğlence3** `- Sayfa 3`", true)
    .setFooter(`${botadi} Komut Listesi ${message.author.tag} Tarafından İstendi`)
    .setTimestamp()
    message.channel.send(embed);
    message.react("👍")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım'
};
