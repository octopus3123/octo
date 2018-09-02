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
                    name: `R4dar Sürüm Notları (2.0.0 > ${surum})`,
                    icon_url: "https://cdn.discordapp.com/attachments/460787570918555659/485735255542595608/glitched_Saurien.png"
                  },
                color: 0xD97634,
                description: `**v2.0.0:** Yeni Müzik Komutları *(${prefix}müzik)*, Çeşitli Hata Düzeltmeleri \n**v2.0.1:** Müzik Komutlarındaki Ufak Hatalar Giderildi \n**v2.0.2:** ${prefix}ping Komutu Octopusun Trafiğini Gösterdiğinden Octopus İçin Yeniden Tasarlandı, Giriş Mesajı Yeniden Düzenlendi, Ufak Hatalar Düzeltildi, ${prefix}sürümNotları Komutu Düzenlendi \n**2.0.3:** Octopus botunun adı **R4dar** Olarak Düzenlendi \n**2.0.4:** ${prefix}kaçCm Komutu Yeniden Düzenlendi, 2 Yeni Komut (${prefix}hangiDjsin, ${prefix}hangiHayvansın) \n**2.0.5:** 2 Komut Güncellemesi (${prefix}botDurumu: Yeni Cpu Kullanımı, ${prefix}ping: Kişisel Pinginiz Artık Doğru gösteriliyor) \n**2.0.6:** Yeni 4 Adet Komut (${prefix}kredim, ${prefix}günlükKredi, ${prefix}oyla, ${prefix}öldür`
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
