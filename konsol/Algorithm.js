//Octopus by R4dar
//
//v2

const reqEvent = (event) => require(`../konsol/${event}`);
module.exports = Octopus => {
  Octopus.on('ready', () => reqEvent('Konsol')(Octopus));
  Octopus.on('message', reqEvent('Yanıt'));
  Octopus.on('guildMemberAdd', reqEvent('SunucuyaÜyeEklemeYanıtı'));
  Octopus.on('guildMemberRemove', reqEvent('SunucudanÜyeÇıkarmaYanıtı'));
  Octopus.on('guildMemberUpdate', reqEvent('SunucuÜyeGüncellemeYanıtı'));
};
