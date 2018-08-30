const oynat = require('./oynat');
queue = oynat.playQueue;

module.exports.run = async (Octopus, message, args) => {
    if(!queue.get(message.guild.id)) return message.channel.send("Sıran Boş")
        .then(msg => {
            msg.delete(10000)
        });
    if(!queue.get(message.guild.id).playing) return message.channel.send("Şuandaki Şarkı Tekrarlanacak")
        .then(msg => {
            msg.delete(10000)
        });
    queue.get(message.guild.id).songs.splice(1, 0, queue.get(message.guild.id).songs[0]);
    message.channel.send("Şuandaki Şarkı Tekrarlanacak")
        .then(msg => {
            msg.delete(10000)
        });
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tekrarla',
};
