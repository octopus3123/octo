//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const Octopus = new Discord.Client();
var gis = require('g-image-search');

exports.run = (Octopus, message) => {
  sb = message.content.substring(5)
         message.channel.send("**Kediler Aranıyor...**").then((msg) =>
				gis('cat').then(function logResults(results) {
					results = results.slice(0, 20)
					img = results[Math.floor(Math.random() * results.length)]
					if (img === undefined) {
						msg.edit("```Hiç Birşey Bulamadım```")
						return
					}
					msg.edit(img)
				}).catch(function(err) {
					console.log(err);
					msg.edit("```Gene Bulamadım```")
				}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
};
