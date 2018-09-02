//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const Octopus = new Discord.Client();

exports.run = (Octopus, message) => {
 message.channel.send({embed: {
		  file:"https://78.media.tumblr.com/be43242341a7be9d50bb2ff8965abf61/tumblr_o1ximcnp1I1qf84u9o1_500.gif",
          color: 0xD97634,
		  description: "**Octopusun Şuanki Yanıt Trafiği: **" + Octopus.ping + "ms" + "\n" + "**Sizin Şuanki Yanıt Trafiğiniz: **" + (new Date().getTime() - message.createdTimestamp) + "ms"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping'
};
