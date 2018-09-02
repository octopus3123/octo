//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const Octopus = new Discord.Client();
const main = require('../Main.json');

var prefix = main.prefix;
var surum = main.surum;

const dj = require('../data/djtable.json');

exports.run = (Octopus, message) => {
  message.channel.send({
    embed: {
      color: 0xD97634,
      title: 'Sanırım Sen Bu Djsin:',
	  image: {
        url: dj[Math.floor(Math.random() * dj.length)]
	 }
    }
  })
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hangiDjsin'
};
