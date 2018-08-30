//Octopus by R4dar
//
//v2

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const winston = require('winston')
var logger = new (winston.Logger)({
})
exports.run = function (Octopus, message, args, args2, cmd) {
    const Discord = require('discord.js');
    const main = require("../Main.json");
    var guild = message.guild;
    var userInput = args.join(' ').toLowerCase();
    const embed19 = new Discord.RichEmbed()
        .setColor("#f0ffff")
        .setDescription("**Komut: **" + `${main.prefix}tkm`)
        .addField("**Kullanım:**", `${main.prefix}tkm <taş/kağıt/makas>`)
        .addField("**Örnek:**", `${main.prefix}tkm taş`)
    if (args.join(' ') == "" && args2.join(" ") == "") return message.channel.send({ embed: embed19 })
    var computerchoose = getRandomIntInclusive(1, 3)
    var computerfinal = '';
    if (computerchoose === 1) {
        computerfinal = "taş";
    }
    else if (computerchoose === 2) {
        computerfinal = "kağıt";
    }
    else if (computerchoose === 3) {
        computerfinal = "makas";
    }
    if ( (userInput === 'Taş' && computerfinal === "Taş") || (userInput === 'taş' && computerfinal === "taş") ) {
        message.channel.send("Berabere! " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if ((userInput === 'Taş' && computerfinal === "Kağıt") || (userInput === 'taş' && computerfinal === "kağıt"))  {
        message.channel.send("**Kaybettin!** " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if ((userInput === 'Taş' && computerfinal === "Makas") || (userInput === "taş" && computerfinal === "makas")) {
        message.channel.send("**Kazandın!** " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if ( (userInput === 'Kağıt' && computerfinal === "Taş") || (userInput === 'kağıt' && computerfinal === "taş")) {
        message.channel.send("**Kazandın!** " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if ( (userInput === 'Kağıt' && computerfinal === "Kağıt") || (userInput === "kağıt" && computerfinal === "kağıt") ) {
        message.channel.send("**Berabere!** " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if ( (userInput === 'Kağıt' && computerfinal === "Makas") || (userInput === "kağıt" && computerfinal === 'makas') ) {
        message.channel.send("**Kaybettin!** " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if ( (userInput === 'Makas' && computerfinal === 'Taş') || (userInput === "makas" && computerfinal === "Taş") ) {
        message.channel.send("*Kaybettin!** " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if ( (userInput === 'Makas' && computerfinal === 'Kağıt') || (userInput === "makas" && computerfinal === "kağıt") ) {
        message.channel.send("**Kazandın!** " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if ( (userInput === 'Makas' && computerfinal === 'Makas') || (userInput === "makas" && computerfinal === "makas")) {
        message.channel.send("**Berabere!** " + `Senin Seçtiğin: ${userInput}. Benim Seçtiğim: ${computerfinal}.`)
    }
    else if (userInput != 'Makas' || userInput != 'makas' || userInput != 'Taş' || userInput != 'taş' || userInput != 'Kağıt' || userInput != 'kağıt') {
        message.reply(':x: Lütfen Taş, Kağıt, Makas Seçimlerinden Birini Seçin');
    }   
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tkm',
};