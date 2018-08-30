//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const Octopus = new Discord.Client();

exports.run = (Octopus, message) => {
 message.channel.send({embed: {
          color: 0xD97634,
		  description: "Zevkten 4 Köşe Olduğunuzu Görür Gibiyim ",
		  file:"https://media.giphy.com/media/dImKd0zOtAqCQ/giphy.gif"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'zevkeGel'
};
