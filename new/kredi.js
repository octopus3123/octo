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
                name: ":money_with_wings: **Kredi Komutları**",
                value: prefix + "**kredim** `-" + " Kredi Bakiyenizi Gösterir`" + "\n" + prefix + "**günlükKredi `-" + " Günlük Kredinizi Alarak Sunucunuzdaki Rolleri Satın Alın`",
				}
			  ],
			timestamp: new Date(),
            footer: {
    		  text: `${botadi} Kredi Komutları ${message.author.tag} Tarafından İstendi || Sayfa 1`
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
  name: 'kredi'
};
