//Octopus by R4dar
//
//v2

const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const main = require('../Main.json');

var prefix = main.prefix;
var botadi = main.botadi;
var surum = main.surum;
var ad = main.ad;
var token = main.token
var sahip = main.owner

module.exports = Octopus => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Tokenle İletişime Geçmeye Hazırlanıyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Bot Tokenle İletişime Geçiyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Token Kodu ${token}`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Aktifleştiriliyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Hızlı Sunucu Kontrolü Yapılıyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bağlantılar Kontrol Ediliyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Herşey Yolunda!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Aktifleştirildi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Sahibi ${sahip}`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${botadi} Sürüm ${surum} by ${ad}`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${Octopus.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı || ${Octopus.guilds.size} Sunucu`);
				  
				  
};
