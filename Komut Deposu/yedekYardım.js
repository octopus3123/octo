//     _                 
//    / \__   _______  __
//   / _ \ \ / / _ \ \/ /
//  / ___ \ V / (_) >  < 
// /_/   \_\_/ \___/_/\_\  (Eski Yardım Komutu)
//

const Discord = require('discord.js');
const avox = require('../avox-ayar.json');

var prefix = avox.prefix;
var ad = avox.ad;
var surum = avox.surum;
var botadi = avox.botadi;

exports.run = (Avox, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(Avox.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: `${botadi} Komutları`
            },
			    "thumbnail": {
				 "url": "https://image.ibb.co/nCvYgT/Untitled_1.png"
			},
            fields: [
				{
                name: ":book: **Genel Komutlar**",
				inline: true,
                value: `${prefix}**sürümNotları**\n${prefix}**SunucuBilgisi**\n${prefix}**botDavet**\n${prefix}**hizmetlerimiz**\n${prefix}**kullanıcıBilgim**\n${prefix}**botDurumu**\n${prefix}**botYapımcısı**\n${prefix}**ascii**\n${prefix}**çevir**\n${prefix}**öner**\n${prefix}**hatırlat**`
			  },
				{
                name: ":gear: **Moderasyon Komutları**",
				inline: true,
                value: `${prefix}**temizle**\n${prefix}**kov**\n${prefix}**oyunDeğiştir**\n`
              },
			  {
                name: ":tada: **Eğlence Komutları**",
				inline: true,
                value: `${prefix}**kedi**\n${prefix}**köpek**\n${prefix}**hastebin**\n${prefix}**köpekadı**\n${prefix}**kediadı**\n${prefix}**twerk**\n${prefix}**sins**\n${prefix}**çekiç**\n${prefix}**koş**\n${prefix}**mcBaşarımı**\n${prefix}**randomŞifre**\n${prefix}**yumrukAt**\n${prefix}**ufaktanAzdır**\n${prefix}**tkm**\n${prefix}**zevkeGel**\n${prefix}**ascii**\n${prefix}**sınav**\n${prefix}**şansÇarkı**\n${prefix}**yt**\n`
              },
              {
                name: ":man::woman:  **Kullanıcı Komutları**",
				inline: true,
                value: `${prefix}**kullanıcıBilgim**\n${prefix}**avatarım**\n${prefix}**ping**\n${prefix}**başvuru**\n${prefix}**yaz**\n${prefix}**duyuru**\n${prefix}**botDurumu**\n${prefix}**ipAdresim**\n${prefix}**rastgeleNum**\n${prefix}**google**\n${prefix}**mesajAt**\n${prefix}**çevir**\n${prefix}**öner**\n${prefix}**hatırlat**\n${prefix}**botKontrol**`
              },
              {
                name: "Sürüm",
                value: `v${surum}`
              }
            ],
            timestamp: new Date(),
            footer: {
              text: `${botadi} by ${ad}`
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yedekYardım'
};
