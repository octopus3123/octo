//Octopus by R4dar
//
//v2

const winston = require('winston')
var logger = new (winston.Logger)({
})
const ipInfo = require("ipinfo");
exports.run = function (Octopus, message, args, args2, cmd) {
    var guild = message.guild;
let user = message.author;
    ipInfo((err, cLoc) => {
        user.send(JSON.stringify(err || cLoc));
    })   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ipAdresim',
};