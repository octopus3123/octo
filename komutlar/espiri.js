const Discord = require('discord.js');
const quiz = [
  { q: `**Bugünlerde Gözüm Çok KIZarıyor**\n *- Benimde Arıyor Ya*` },
  { q: `**En İhtiyaç Duyulan Arı?**\n *- BaşArı*` },
  { q: `**GitARI Getirde Biraz Şarkı Söyleyelim.**\n *- Abi Arı Sokmasın!*` },
  { q: `**Keklik Askere Giderse Ne Olur?**\n *- Er-Keklik*` },
  { q: `**Asker Adın Ne?**\n *- Emre-Dersiniz Komutanım!*` },
  { q: `**Sen Nasıl Bir Kulsun?**\n *- Endoplazmik Reti-Kulum*` },
  { q: `**Masada Hangi Örtü Kullanılmaz?**\n *- Bitki Örtüsü*` },
  { q: `**Bizim CD Sürücümüz Ehliyeti Nerden Almış Acaba?**` },
  { q: `**Ben Hikaye Yazarım.**\n *- Ebru Destan*` },
  { q: `**Ayna’nın Karşısında Süslenme, Manga’nın Karşısında Süslen.**` },
  { q: `**Geçen File Çorap Aldım, Zürafaya Almadım.**` },
  { q: `**Yılanlardan Korkma, Yılmayanlardan Kork.**` },
  { q: `**Baykuşlar Vedalaşırken Ne Der?**\n *- Bay Bay Bay Kuş*` },
  { q: `**Adamın Biri Notebook Almış, DELLenmiş.**` },
  { q: `**Ayakkabıcı Sıkıyorsa Alma Dedi, Bende Korktum Aldım.**` },
  { q: `**Balık Ekmek 3 Liraymış, Hadi Balık Ekelim.**` },
  { q: `**Sin SağTürk / Cos SağTürk = Tan SağTürk**` },
  { q: `**İçimde Bir-acı Var, Bira Almak İçin Uzağa Gitmiyorum.**` },
  { q: `**Tekel’in Nesi Var, İki Elin Sesi Var.**` },
  { q: `**Bak Şu Karşıdaki Uçak PİSTİ, Ama Bir Türlü Temizlemediler.**` },
  { q: `**Denizaltı’nın Bir Üst Modeli Nedir?**\n *- Denizyedi*` },
  { q: `**Senin adın ne?**\n *- Shen Bill*\n **-Nerden Bileyim Be?**` }
];

module.exports.run = async (Octopus, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'espiri'
};
