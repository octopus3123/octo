const discord = require('discord.js');

module.exports.run = (Octopus, message, args) => {
  //message.channel.send("Use this to join the help server: https://discord.gg/XvMA2rJ")
  let guild = Octopus.guilds.get(`451409106335694858`)
  guild.channels.find("name", "general").createInvite({
   temporary: false, maxAge: 400, maxUses: 100, unique: true})
   .then(invite =>{
      let embed = new discord.RichEmbed()
      .setAuthor(`Sunucu Başarıyla Dikizlendi`, Octopus.user.avatarURL)
      .setThumbnail(Octopus.guilds.get(`451409106335694858`).iconURL)
      .setColor(message.guild.me.displayHexColor !='#000000' ? message.guild.me.displayHexColor : "ff3333")
      .setDescription(`
Sunucu Dikizlenip Davet Linki Çıkarıldı Acele Et Davet Süresi Kısıtlı!

[Sunucuya Gir](${invite} "Acele Et Kısıtlı Zamanı Var!")
`)
    .setFooter(`Dikizlenen Sunucudaki Kişiler: ${guild.memberCount}`);
    
  message.channel.send({embed});
    
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sunucuDikizle'
};
