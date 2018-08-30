//     _                 
//    / \__   _______  __
//   / _ \ \ / / _ \ \/ /
//  / ___ \ V / (_) >  < 
// /_/   \_\_/ \___/_/\_\
//

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
const winston = require('winston')
var logger = new (winston.Logger)({
})
exports.run = function (Octopus, message, args, args2, cmd) {
    const Discord = require('discord.js');
    const main = require("../Main.json");
    var guild = message.guild;
    const embed19 = new Discord.RichEmbed()
        .setColor("#f0ffff")
        .setDescription("**Komut: **" + `${main.prefix}rastgeleNum`)
        .addField("**Kullanım:**", `${main.prefix}rastgeleNum <Birinci Numara> <İkinci Numara>`)
        .addField("**Örneği:**", `${main.prefix}rastgeleNum 1 100`)
    if (args.join(' ') == "" && args2.join(" ") == "") return message.channel.send({ embed: embed19 })
    var low = args.shift();
    var ans = getRandomIntInclusive(low, args2.join(' '));
    if (!low) return message.reply("Lütfen 2. Rakamdan Daha Düşük Bir Rakam Belirtiniz");
    if (!args2.join(' ')) return message.reply("Lütfen 1. Rakamdan Daha Yüksek Bir Rakam Belirtiniz");
    message.channel.send(ans) 
	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rastgeleNum',
};
