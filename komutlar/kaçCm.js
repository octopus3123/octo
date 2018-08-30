//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const kaçCm = [
  { cm: "Senin Malafatın **1cm** `Allah Sabır Versin.`" },
  { cm: "Senin Malafatın **4cm** `Yavaş Yavaş Büyücek O Rahat Ol :)`" },
  { cm: "Senin Malafatın **8cm** `Normal Düzeydesin Fazla Coşmada Geberirsin`" },
  { cm: "Senin Malafatın **14cm** `Kalbi Durdurucak Düzeydesin ÖKÜZ Git Kırptır Giojinde`" }
];

module.exports.run = async (Octopus, message, args) => {
  
  const item = kaçCm[Math.floor(Math.random() * kaçCm.length)];
  await message.channel.send(item.cm);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kaçCm'
};
