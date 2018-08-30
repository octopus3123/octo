//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const Octopus = new Discord.Client();

exports.run = (Octopus, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/3o6oziEt5VUgsuunxS/giphy.gif",
          color: 0xD97634,
		  description: "**:peach: Twerk Vakti!**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'twerk'
};
