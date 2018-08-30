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
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 99999);
	message.channel.send({embed: {
            color: 0xD97634,
			author: {
            name: `${botadi}`
	        },
            fields: [
				{
                name: ":boy: :girl: **Kullanıcı Komutları**",
                value: prefix + "**sürümNotları** `-" + " Octopus Sürümü Hakkında Bilgi Verir`" + "\n" + prefix + "**sunucuBilgisi** `-" + " Sunucunuzun Bilgisini Gösterir`" + "\n" + prefix + "**destekSunucusu** `-" + " Destek Sunucusunun Davet Linkini Özelden Atar`" + "\n" + prefix + "**hizmetlerimiz** `-" + " Octopus'un Kaç Sunucuya Hizmet Verdiğini Gösterir`" + "\n" + prefix + "**botYapımcısı** `-" + " Octopus'un Yapımcısı Hakkında Bilgi Verir`",
				}
			  ],
			timestamp: new Date(),
            footer: {
    		  text: `${botadi} Kullanıcı Komutları ${message.author.tag} Tarafından İstendi || Sayfa 3`
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
  name: 'kullanıcı3'
};
