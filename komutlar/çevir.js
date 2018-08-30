//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const translate = require('google-translate-api');
const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];
const main = require("../Main.json");
var prefix = main.prefix;

module.exports.run = async (Octopus, message, args) => {

    if (!args[0]) {

        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription(`**Lütfen Hangi Dile Çevireceğinizi Belirtin.**\nKullanım: ${prefix}çevir turkish pencil`);

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send('Çevrilcek Kelimeyi Yazmadınız!');

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Böyle Bir Dil Bulunmamakta Lütfen Dilleri İngilizce Olarak Giriniz**\n**Örnek:turkish**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Çeviri", Octopus.user.displayAvatarURL)
                    .addField(`Çevrilcek Kelime`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Çevrilen`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);

            });

        }

    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çevir'
};