//Octopus by R4dar
//
//v2

const Discord = require('discord.js');

const Kaçcm = require('../data/kaçCm.json');

exports.run = (Octopus, message) => {
  message.channel.send({
    embed: {
      color: 0xD97634,
      title: 'Malafatın Sanırım:',
      description: Kaçcm[Math.floor(Math.random() * Kaçcm.length)]
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
  name: 'kaçCm'
};
