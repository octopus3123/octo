//Octopus by R4dar
//
//v2

function timeCon(time) {
    time = time * 1000
    let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0
    days = Math.floor(time / 86400000)
    time -= days * 86400000
    hours = Math.floor(time / 3600000)
    time -= hours * 3600000
    minutes = Math.floor(time / 60000)
    time -= minutes * 60000
    seconds = Math.floor(time / 1000)
    time -= seconds * 1000
    days = days > 9 ? days : "" + days
    hours = hours > 9 ? hours : "" + hours
    minutes = minutes > 9 ? minutes : "" + minutes
    seconds = seconds > 9 ? seconds : "" + seconds
    return (parseInt(days) > 0 ? days + " Gün " : " ") + (parseInt(hours) === 0 && parseInt(days) === 0 ? "" : hours + " Saat ") + minutes + " Dakika " + seconds + " Saniye "
}
const winston = require('winston')
var logger = new (winston.Logger)({
})

exports.run = function (Octopus, message, params, cmd) {
    const Discord = require('discord.js');
    const main = require("../Main.json");
    const Surum = require("os")
	var ad = main.ad
	var destekler = main.destekler
    var guild = message.guild;
    const embed = new Discord.RichEmbed()
        .setColor('#7d5bbe')
        .setTitle(Octopus.user.username + " Surum: " + main.surum + ` Durumu`)
        .setDescription(Octopus.user.username + timeCon(process.uptime()) + 'dir Aktif Durumda ')
        .addField('ğŸ  Sunucular', Octopus.guilds.size, true)
        .addField('ğŸ“„ Kanallar', Octopus.channels.size, true)
        .addField('ğŸ¤µ Toplam Kullanicilar', Octopus.users.size, true)
        .addField('ğŸ Bellek Kullanimi', `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
        .addField('ğŸ“ Trafigi', `${(Octopus.ping).toFixed(0)} ms`, true)
        .addField(`:control_knobs: Alt Yapisi`, `Discord JS v${Discord.version}`, true)
        .addField(`:computer: Node Surumu `, `${process.version}`, true)
        .addField(`:regional_indicator_h: :regional_indicator_o: :regional_indicator_s: :regional_indicator_t: Makinesinin Adi`, `${Surum.hostname}`, true)
        .addField(`:white_check_mark: Host Makinesinin Isletim Sistemi`, `${Surum.platform}`, true)        
        .addField(`:construction_worker: Kurucusu`, `${ad}`, true)
        .addField(`:pray: Destekler`, `${destekler}`, true)
        //.addField(`:electric_plug: CPU Kullanımı:`, `${Surum.cpus}`)
    message.channel.send({ embed: embed })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botDurumu',
};
