//Octopus by R4dar
//
//v2

const Discord = require("discord.js");
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
                name: ":boy: :girl: **Kullanıcı Komutları**",
                value: prefix + "**kullanıcıBilgim** `-" + " Hesabınızın Bilgilerini Gösterir`" + "\n" + prefix + "**ping** `-" + " Octopusun Yanıt Trafiğini Gösterir`" + "\n" + prefix + "**başvuru** `-" + " Sunucunuzdaki Rollere Başvurmanızı Sağlar`" + "\n" + prefix + "**yaz** `-" + " Yazınızı Bota Yazdırır`" + "\n" + prefix + "**duyuru** `-" + " Yazınızı Sunucunuza Duyuru Yapar`" + "\n" + prefix + "**botDurumu** `-" + " Botun Bilgilerini Gösterir`" + "\n" + prefix + "**öner** `-" + " Önerinizi Botun Sahibine Yollar`" + "\n" + prefix + "**hataRaporla** `-" + " Belirtilen Bot Hatalarını Botun Sahibine Yollar`" + "\n" + prefix + "**hatırlat** `-" + " Yazınızı Belirtilen Süre Sonra Geri İletir`",
				}
			  ],
			timestamp: new Date(),
            footer: {
    		  text: `${botadi} Kullanıcı Komutları ${message.author.tag} Tarafından İstendi || Sayfa 1`
			 }
           }
	    });  
	    message.react("👍")
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ ],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı'
};
