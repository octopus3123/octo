//Octopus by R4dar
//
//v2

const main = require("../Main.json");
var YouTube = require('youtube-node');
var youTube = new YouTube();
const youtubeKey = main.yt;
youTube.setKey(youtubeKey)
const winston = require('winston')
var logger = new (winston.Logger)({
})
exports.run = function (Octopus, message, args, args2, cmd) {
    const Discord = require('discord.js');
    var guild = message.guild;
    const embed19 = new Discord.RichEmbed()
        .setColor("#f0ffff")
        .setDescription("**Komut: **" + `${main.prefix}yt`)
        .addField("**Kullanımı:**", `${main.prefix}yt <Arancak Video>`)
        .addField("**Örneği:**", `${main.prefix}yt Avox Bot`)
    if (!args.join(' ')) {
        return message.channel.send({ embed: embed19 })
    }
    message.channel.send("Aranıyor. " + args.join(' '))
    message.channel.send("Aranıyor.. " + args.join(' '))
    message.channel.send("Aranıyor... " + args.join(' '))
    youTube.search(args.join(' '), 1, function (error, result) {
        if (error) {
            message.channel.send(error);
        } else {
            // console.log(JSON.stringify(result, null, 2))
            let beforeid = "nothing"
            let id = "nothing"
            if (result.items[0].id.kind === "youtube#video") {
                beforeid = "https://www.youtube.com/watch?v="
                id = result.items[0].id.videoId
            } else if (result.items[0].id.kind === "youtube#playlist") {
                beforeid = "https://www.youtube.com/playlist?list="
                id = result.items[0].id.playlistId
            } else if (result.items[0].id.kind === "youtube#channel") {
                beforeid = "https://www.youtube.com/channel/"
                id = result.items[0].id.channelId
            } else {
                return message.channel.send(":x: Bu Video Hakkında Hiç Bir İze Rastlamadım.")
            }
            message.channel.send(":ok_hand: Aradığın Video " + beforeid + id)
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yt'
};