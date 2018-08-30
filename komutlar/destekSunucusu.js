//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const main = require('../Main.json');
const Octopus = new Discord.Client();
var davet = main.davet

exports.run = (Octopus, message) => {
  if (message.channel.type !== 'dm') {
    const Bilgi = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(Bilgi) }
	const Mesaj = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Link: ${davet}`);
    return message.author.sendEmbed(Mesaj)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'destekSunucusu'
};
