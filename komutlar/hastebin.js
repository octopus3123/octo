//Octopus by R4dar
//
//v2

const hastebin = require('hastebin-gen');

exports.run = (Octopus, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send(":x: Lütfen Komutun Yanına Kod yada Herhangi Birşey Yazınız") }
        hastebin(haste, type).then(r => {
            msg.channel.send(":white_check_mark: Linkiniz: " + r);
        }).catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hastebin'
};