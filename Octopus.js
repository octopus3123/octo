//        ___       _                        
//       / _ \  ___| |_ ___  _ __  _   _ ___ 
//      | | | |/ __| __/ _ \| '_ \| | | / __|
//      | |_| | (__| || (_) | |_) | |_| \__ \
//       \___/ \___|\__\___/| .__/ \__,_|___/
//                          |_|              

const Discord = require('discord.js');
const Octopus = new Discord.Client();
const main = require('./Main.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./konsol/Algorithm.js')(Octopus);
    const DBL = require("dblapi.js");
    const dbl = new DBL(process.env.DBL_TOKEN, Octopus);

var prefix = main.prefix;
var ad = main.ad;
var surum = main.surum;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

Octopus.commands = new Discord.Collection();
Octopus.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Komut Yükleniyor..`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`${props.help.name}.`);
    Octopus.commands.set(props.help.name, props);
  });
});

Octopus.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      Octopus.commands.delete(command);
      Octopus.aliases.forEach((cmd, alias) => {
        if (cmd === command) Octopus.aliases.delete(alias);
      });
      Octopus.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        Octopus.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

Octopus.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      Octopus.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        Octopus.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

Octopus.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      Octopus.commands.delete(command);
      Octopus.aliases.forEach((cmd, alias) => {
        if (cmd === command) Octopus.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

function OctopusDurumu() {
  let status = [
    ` Komut Sayfası İçin ${prefix}yardım. `,
    ` Sürümüm: ${surum}. `,
    ` ${surum} Yeniliklerine Bakmak İçin ${prefix}sürümNotları. `,
    ` ${Octopus.guilds.size} Sunucuya Hizmet Vermekteyim `,
    ` Geliştiricim ${ad} `,
    ` Hataya Rastlarsanız ${prefix}hataRaporla `,
    ` Önerileriniz İçin ${prefix}öner `,
    ` ${Octopus.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıya Hizmet Vermekteyim. ` // Octopus Oyunu
    ];
    let OctoDurumu = Math.floor(Math.random() * status.length);

    Octopus.user.setActivity(status[OctoDurumu], {type: "WATCHING"}); // Octopus Durumu
    }; setInterval(OctopusDurumu, 5600)
       setInterval(() => {
	   dbl.postStats(Octopus.guilds.size)
       }, 1800000);

//Küfür & Cevap Filitresi
Octopus.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm Selam**');
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('Aleyküm Selam');
  }

  if (msg.content === 'by') {
   	msg.reply('Güle Güle');
  }
  
  if (msg.content === 'güle güle') {
   	msg.reply('Sanada Güle Güle');
  }
  
  if (msg.content === 'octopus') {
    msg.reply('Efendim Aşkım ?');
  }
  
  if (msg.content === 'octopus seni sikerim') {
   	msg.reply('Benim Götüm Yokki Sikesin Git Sahibimi Sik');
  }
  
  if (msg.content === 'octopus nasılsın') {
   	msg.reply('Allaha Şükür İyiyim Sen?');
  }
  
  if (msg.content === 'octopus iyiyim') {
   	msg.reply('Allah İyilik Versin');
  }
  
  });

Octopus.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === main.owner) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// Octopus.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

Octopus.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

Octopus.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

Octopus.login(main.token);
