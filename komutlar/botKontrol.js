//Octopus by R4dar
//
//v2

const Discord = require("discord.js");

module.exports.run = async (Octopus, message, args) => {
  let msg = await message.channel.send("Test Ediliyor.");
  let msg1 = await message.channel.send("Test Ediliyor..");
  let msg2 = await message.channel.send("Test Ediliyor...");
  let testembed = new Discord.RichEmbed()
  .setColor("#42f453")
  .setDescription("Test Başarılı. Bot Çevrimiçi :sunglasses:")
  message.channel.send(testembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botKontrol'
};
