const Discord = require("discord.js");
const money = require('discord-money');
const moment = require('moment');
require("moment-duration-format");
const ms = require("ms");

module.exports.run = async (Octopus, message, args) => {
  money.fetchBal(message.author.id).then((i) => {
  message.channel.send(`**Balance:** ${i.money}`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kredim'
};