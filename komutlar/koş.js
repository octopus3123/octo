//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const main = require('../Main.json');

exports.run = (Octopus, message, params) => {
	if (!message.guild) {
    const Koş1 = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(Koş); }
    if (message.channel.type !== 'dm') {
      const Koş = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Koş! Koş! Koş!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.tenor.com/images/67d019794cfe0eafdb86a57daac3acf2/tenor.gif`)
    return message.channel.sendEmbed(Koş);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'koş'
};
