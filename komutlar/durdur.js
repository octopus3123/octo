const oynat = require('./oynat');
queue = oynat.playQueue;

module.exports.run = async (Octopus, message, args) => {
    if(!queue.get(message.guild.id)) return message.channel.send("Müzik Sırası Oluşturulmamış")
        .then(msg => {
           msg.delete(10000)
        });
    if(!queue.get(message.guild.id).playing) return message.channel.send("Müzik Sıran Şuanda Durduruldu")
        .then(msg => {
            msg.delete(10000)
        });
    queue.get(message.guild.id).connection.dispatcher.pause();
    message.channel.send("Müzik Sıran Şuanda Durduruldu")
        .then(msg => {
            msg.delete(10000)
        });
    queue.get(message.guild.id).playing = false;
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'durdur'
};