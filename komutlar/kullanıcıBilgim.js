//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const main = require('../Main.json');

exports.run = (Octopus, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0xD97634) : (Durum == "offline" ? (0xD97634) : (Durum == "idle" ? (0xD97634) : (Durum == "dnd" ? (0xD97634) : (0xD97634)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Adınız:', message.author.username + '#' + message.author.discriminator)
      .addField('IDniz:', message.author.id)
      .addField('Kayıt Tarihiniz:', message.author.createdAt)
      .addField('Durumunuz:', durm)
      .addField('Oynadığınız Oyun:', message.author.presence.game ? message.author.presence.game.name : 'Şuanda Oyun Oynamıyorsun')
      .addField('BOT mu?', message.author.bot ? '\n Evet' : 'Hayır')
      console.log("!kullanıcıbilgim komutu " + message.author.username + " tarafından kullanıldı.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıBilgim'
};