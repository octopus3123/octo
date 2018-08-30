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
                name: ":musical_note: **Müzik Komutları**",
                value: prefix + "**oynat** `-" + " Belirttiğiniz bir Şarkıyı Listeye Ekler ve Oynatır`" + "\n" + prefix + "**durdur** `-" + " Listenizi Durdurur (Çalan Şarkı Dahil)`" + "\n" + prefix + "**bitir** `-" + " Listenizi Çalmayı Bitirir`" + "\n" + prefix + "**devamEt** `-" + " Durdurduğunuz Listeyi Devam Ettirir`" + "\n" + prefix + "**atla** `-" + " Listedeki Bir Sonraki Şarkıya Atlar`" + "\n" + prefix + "**tekrarla** `-" + " Çalan Şarkıyı Bitince Tekrar Çalar`" + "\n" + prefix + "**sıra** `-" + " Sıradaki Şarkıları Gösterir`" + "\n" + prefix + "**havalıKorna** `-" + " Bulunduğunuz Ses Kanalında Havalı Korna Çalar`",
				}
			  ],
			timestamp: new Date(),
            footer: {
    		  text: `${botadi} Müzik Komutları ${message.author.tag} Tarafından İstendi`
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
  name: 'müzik'
};
