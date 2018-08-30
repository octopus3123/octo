//        ___       _                        
//       / _ \  ___| |_ ___  _ __  _   _ ___ 
//      | | | |/ __| __/ _ \| '_ \| | | / __|
//      | |_| | (__| || (_) | |_) | |_| \__ \
//       \___/ \___|\__\___/| .__/ \__,_|___/
//                          |_|              

const Discord = require("discord.js");
const kernel = require("../Main.json");
var davet = kernel.davet;
module.exports.run = async (Octopus, message, args) => {
if (args == 0) return message.channel.send("**Raporunuzu Octopus Ekibine Yollayabilmem İçin Bir Rapor Giriniz.** `Örnek: o!öner Yardım Komutunda Gecikme Var`")
let komut = args.join(" ").slice(0)
let user = message.author.username;
let guild = message.guild.name;
let channel = Octopus.channels.get("469113607834173442")
let embed = new Discord.RichEmbed()
.setTitle("Rapor")
.addField("Beliritilen Rapor:", komut)
.addField("Raporu Yollayan:", user)
.addField("Raporun Yollandığı Sunucu:", guild)
.setColor("#f49542")

message.channel.send("**:ok_hand: Raporunuz Octopus Ekibine Yollandı.**")
message.channel.send("**:pray: Raporunuz İçin Teşekkürler. Raporunuz İncelenip Sizin İçin En İyi Hale Gerilicektir**")
message.channel.send("**Herhangi Bir Desteğe İhtiyaç Duyarsınız Destek Sunucumuz:**")
message.channel.send(`${davet}`)
channel.send(embed).then(i => i.react("⏳")) 


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ ],
  permLevel: 0
};

exports.help = {
  name: 'hataRaporla'
};