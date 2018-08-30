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
                value: prefix + "**kedi** `-"  + " Rastgele Kedi Resmi Atar`" + "\n" + prefix + "**köpek** `-" + " Rastgele Köpek Resmi Atar`" + "\n" + prefix + "**hastebin** `-" + " Yazınızı Hastebine Yükler`" + "\n" + prefix + "**köpekadı** `-" + " Rastgele Köpek İsimleri Atar`" + "\n" + prefix + "**kediadı** `-" + " Rastgele Kedi İsimleri Atar`" + "\n" + prefix + "**twerk** `-" + " Twerk Vakti !!`" + "\n" + prefix + "**espiri** `-" + " Rastgele Espiri Atar`",
				}
			  ],
			timestamp: new Date(),
            footer: {
    		  text: `${botadi} Eğlence Komutları ${message.author.tag} Tarafından İstendi || Sayfa 1`
			 }
           }
	    });  
	    message.react("👍")
};

module.exports.help = {
    name: "eğlence"
}