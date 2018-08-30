//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
exports.run = function(Octopus, message, args) {
  if (!message.guild) {
  const Uyarı = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(Uyarı); }
  if (!message.guild.member(Octopus.user).hasPermission("MANAGE_MESSAGES")) {
	const YetkiMM = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları Silebilmem İçin MANAGE_MESSAGES Yetkisine Sahib Olmam Gerekiyor.')
    return message.author.sendEmbed(YetkiMM);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const Silindi = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .addField('Eylem:', 'Sohbet silme')
    .addField('Yetkili:', message.author.username)
    .addField('Sonuç:', `Başarılı`)
    return message.channel.sendEmbed(Silindi);
    console.log("Sohbet " + message.member + " tarafından silindi!");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'temizle'
};
