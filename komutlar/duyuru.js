//Octopus by R4dar
//
//v2

const Discord = require('discord.js');

exports.run = (Octopus, message, args) => {
	let guild = message.guild
	let duyuru = guild.channels.find('name', 'duyuru-kanalı');
	if (!duyuru) return message.reply('`duyuru-kanalı`nı Bulamıyorum.');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Lütfen Komutun Sonuna Duyurunuzuda Yazın.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`:postal_horn: **Duyuru ;**\n${mesaj}`)
    return guild.channels.get(duyuru.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'duyuru'
};