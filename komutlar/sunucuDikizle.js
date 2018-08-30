//Octopus by R4dar
//
//v2

const discord = require('discord.js');

module.exports.run = (Octopus, message, args) => {
  let guild = Avox.guilds.get(`İD`)
  guild.channels.find("name", "genel").createInvite({
   temporary: false, maxAge: 400, maxUses: 100, unique: true})
   .then(invite =>{
      let embed = new discord.RichEmbed()
      .setAuthor(`Sunucu Başarıyla Dikizlendi`, Avox.user.avatarURL)
      .setThumbnail(Avox.guilds.get(`455725370898120705`).iconURL)
      .setColor(message.guild.me.displayHexColor !='#000000' ? message.guild.me.displayHexColor : "ff3333")
      .setDescription(`
Sunucu Dikizlenip Davet Linki Çıkarıldı Acele Et Davet Süresi Kısıtlı!
Dikizlenen Sunucu **${guild.name}**
[Sunucuya Gir](${invite} "Acele Et Kısıtlı Zamanı Var!")
`)
    .setFooter(`Dikizlenen Sunucudaki Kişiler: ${guild.memberCount}`);
    
  message.channel.send({embed});
    
  });
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sunucuDikizle'
};
