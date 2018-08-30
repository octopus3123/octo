const oynat = require('./oynat');
queue = oynat.playQueue;

module.exports.run = async (Octopus, message, args) => {
    if(!queue.get(message.guild.id)) return message.channel.send("Müzik Sırası Oluşturulmamış")
        .then(msg => {
            msg.delete(10000)
        });
    index = 0
    message.channel.send(`Sırandaki Müzikler: 
${queue.get(message.guild.id).songs.map(videos => `${++index}: ${videos.title}`).join(`\n`)}`)
        .then(msg => {
            msg.delete(10000)
        });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sıra'
};