const Discord = require("discord.js");
const money = require('discord-money');
const moment = require('moment');
require("moment-duration-format");
const ms = require("ms");

module.exports.run = async (Octopus,message, args) => {
  let sicon = message.guild.iconURL;
   message.delete();
    if (money[message.author.username + message.guild.name] != moment().format('L')) {
    money[message.author.username + message.guild.name] = moment().format('L')
    money.updateBal(message.author.id, 7).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
      let collectembed = new Discord.RichEmbed()
      .setTitle("Günlük Kredi")
      .setThumbnail(sicon)
      .setColor("#CFB53B")
      .setDescription(`${message.guild.name} Kredi Tanımlama`)
      .addBlankField(true)
      .addField("Hesap Sahibi", `${message.author.username}`, true)
      .addField("Hesaba Aktarılan Kredi", 7, true)
message.channel.send(collectembed)
  })
} else {
  let gicon = message.guild.iconURL;
  let collectedembed = new Discord.RichEmbed()
  .setTitle("Günlük Kredi")
  .setColor("#CFB53B")
  .setDescription(`${message.guild.name} Kredi Tanımlama`)
  .setThumbnail(gicon)
  .setFooter(`Günlük Kredinizi Topladınız Yarın Gene Uğrayın`);
  message.channel.send(collectedembed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'günlükKredi'
};