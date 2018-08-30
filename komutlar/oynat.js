const ytdl = require('ytdl-core');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAsVz8StcSjVtqOmuOmNUhSJDRJPMe86n4');
const Discord = module.require("discord.js");

module.exports.playQueue = queue;
module.exports.run = async (Octopus, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send("Lütfen Herangi Bir Ses Kanalına Girin");
    if(!args[0]) return message.channel.send("Lütfen Geçerli Bir Link Girin");
    const serverQueue = queue.get(message.guild.id);
    const url = args.join(" ");
    try {
        var video = await youtube.getVideo(url);
    }
    catch (error) {
        try {
            var videos = await youtube.searchVideos(url, 4);
            let index = 0;
            let msg = await message.channel.send(`
__**Şarkı Seçimi**__

${videos.map(video2 => `${++index}: **${video2.title}**`).join(`\n`)}

Lütfen 1 den 4'e Kadar Bir Şarkı Seçin
            `);
            try {
                var response = await message.channel.awaitMessages(reply => reply.content > 0 && reply.content < 5, {
                    maxMatches: 1,
                    time: 10000,
                    errors: ['time']
                });
                msg.delete();
            }
            catch (err) {
                msg.delete();
                return message.channel.send("Şarkı Yüklenirken Hata Meydana Geldi")
                    .then(msg => {
                        msg.delete(10000)
                    });
            }
            const videoIndex = parseInt(response.first().content);
            var video = await youtube.getVideoByID(videos[videoIndex-1].id);
        }
        catch(e) {
            console.error(e);
            return message.channel.send("Hiç Birşey Bulunamadı");
        }
    }
    const song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`
    };  

    if(!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5, 
            playing: true
        };
        queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        }
        catch (error) {
            console.error(error);
            message.channel.send("Bu Ses Kanalına Giriş Yapamıyorum");
            queue.delete(message.guild.id);
        }
        
    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`**${song.title}** Sıraya Eklendi`)
            .then(msg => {
                msg.delete(10000)
            });
    }   
    return;

process.on('unhandledRejection', error => console.error(`İzin Hatası:\n${error}`));
    
function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if(!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        message.channel.send("Sıradaki Müzikler Silindi")
            .then(msg => {
                msg.delete(10000)
            });
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
    });
    message.channel.send(`**${song.title}** Şuanda Çalıyor`)
        .then(msg => {
            msg.delete(10000)
        });
    dispatcher.setVolumeLogarithmic(5 / 5);
}   
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oynat',
};