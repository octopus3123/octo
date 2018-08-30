//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const main = require('../Main.json');
var prefix = main.prefix;
var botadi = main.botadi

module.exports.run = async (Octopus, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(Octopus.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
			author: {
            name: `${botadi}`
	        },
            fields: [
				{
                name: ":tada: **Eğlence Komutları**",
                value: prefix + "**çekiç** `-" + " Belirtilen Kullanıcıya Çekiç Atar`" + "\n" + prefix + "**koş** `-" + " Koşarsınız`" + "\n" + prefix + "**mcBaşarımı** `-" + " Yazınızı Minecraft Başarısına Dönüştürür`" + "\n" + prefix + "**rastgeleŞifre** `-" + " Rastgele Şifre Atar`" + "\n" + prefix + "**yumrukAt** `-" + " Yumruk Atar`" + "\n" +  prefix + "**yt** `-" + " Belirtilen Videoyu Youtubede Aratır`" + "\n" + prefix + "**söv** `-" + " Rastgele Argo Cümleler Kurar`" + "\n" + prefix + "**kaçCm** `-" + " Malafatınızı Ölçer`",
				}
			  ],
			timestamp: new Date(),
            footer: {
    		  text: `${botadi} Eğlence Komutları ${message.author.tag} Tarafından İstendi || Sayfa 2`
			 }
           }
	    });  
	    message.react("👍")
}};

module.exports.help = {
    name: "eğlence2"
}