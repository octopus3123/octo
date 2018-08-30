//Octopus by R4dar
//
//v2

const Discord = require('discord.js');

exports.run = (Octopus, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let Başvuru = guild.channels.find('name', 'başvuru-kanalı');
  if (!Başvuru) return message.reply('`başvuru-kanalı`nı Bulamıyorum.');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Sunucuya Neler Kazandıracağınızı Adınızı Yaşınızı İstediğiniz Rolü Ve Tagınızı Yazınız');
  if (message.mentions.users.size < 1) return message.reply('Tagınızı Etiketleyin.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .addField('Durum:', 'Talep Açıldı')
    .addField('Gönderen Kişi:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Bilgiler', reason);
	
	return guild.channels.get(Başvuru.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru',
};