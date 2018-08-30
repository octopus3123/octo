//Octopus by R4dar
//
//v2

const Discord = require("discord.js")
exports.run = (Octopus, message) => {
  const guildArray = Octopus.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`Sunucu Adı: **${guild.name}** || Üye Sayısı : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Hizmetlerimiz')
      embed.setDescription(`**${Octopus.guilds.size}** Sunucuya Hizmet Vermekteyim !`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "hizmetlerimiz"
};