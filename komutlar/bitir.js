module.exports.run = async (Octopus, message, args) => {
    if(!message.guild.voiceConnection) {
        message.channel.send("Şuanda Herhangi Bir Müzik Sırası Kurulmadı")
            .then(msg => {
                msg.delete(10000)
            });
        return;
    }
    const voiceChannel = message.guild.voiceConnection.channel;
    voiceChannel.leave();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bitir'
};
