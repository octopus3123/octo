//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const Octopus = new Discord.Client();
const main = require('../Main.json');

var prefix = main.prefix;
var surum = main.surum;

exports.run = (Octopus, message) => {
  message.channel.send({embed: {
                author: {
                    name: `R4dar Güncel Sürüm Notları (Sürüm: 2.0.0 > ${surum})`,
                    icon_url: "https://cdn.discordapp.com/attachments/460788815078883328/474400706065989643/octo.png"
                  },
                color: 0xD97634,
                description: `**v2.0.0:** Yeni Müzik Komutları *(${prefix}müzik)*, Çeşitli Hata Düzeltmeleri \n**v2.0.1:** Müzik Komutlarındaki Ufak Hatalar Giderildi \n**v2.0.2:** ${prefix}ping Komutu Octopusun Trafiğini Gösterdiğinden Octopus İçin Yeniden Tasarlandı, Giriş Mesajı Yeniden Düzenlendi, Ufak Hatalar Düzeltildi, ${prefix}sürümNotları Komutu Düzenlendi\n Bot Adı **R4dar** Olarak Değiştirildi`
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sürümNotları'
};
