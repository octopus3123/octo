//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const main = require('../Main.json');
var prefix = main.prefix;
var botadi = main.botadi

module.exports.run = async (Octopus, message, params) => {
	message.channel.send({embed: {
            color: 0xD97634,
			author: {
            name: `${botadi}`
	        },
            fields: [
				{
                name: ":tada: **Eğlence Komutları**",
				inline: true,
                value: prefix + "**tkm** `-" + " Taş Kağıt Makas Oyunu`" + "\n" + prefix + "**zevkeGel** `-" + " Zevke Gelirsiniz`" + "\n" + prefix + "**ascii** `-" + " Yazınızı Şekilli Yazıya Dönüştürür`" + "\n" + prefix + "**sınav** `-" + " Bilginizi Sınarsınız`" + "\n" + prefix + "**şansÇarkı** `-" + " Çarkınız Döner Şanslıysanız Kazanırsınız`",
				}
			  ],
			timestamp: new Date(),
            footer: {
    		  text: `${botadi} Eğlence Komutları ${message.author.tag} Tarafından İstendi || Sayfa 3`
			 }
           }
	    });  
	    message.react("👍")
};

module.exports.help = {
    name: "eğlence3"
}