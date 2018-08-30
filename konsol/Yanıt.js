//Octopus by R4dar
//
//v2

const chalk = require('chalk');
const main = require("../Main.json");
 const Discord = require('discord.js');
module.exports = message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(main.prefix)) return;
    
    const Octopus = message.client;


    let komut = message.content.split(" ")[0];
    komut = komut.slice(main.prefix.length);
	
	let params = message.content.split(' ').slice(1);
	
    let perms = Octopus.elevation(message);
    
    let args = message.content.split(" ").slice(1);

    let args2 = message.content.split(" ").slice(2);

    let cmd = args.join(' ');
    
    let cmd2 = args2.join(' ');
    var res = cmd.slice(0, 1);
    
    function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;

}
    const Discord = require('discord.js');
    try {
        let cmdFile = require(`../komutlar/${komut}`);
        cmdFile.run(Octopus, message, args, args2, params, perms, main, Discord);

    } catch(error) {
        console.log(`Komutlar ${komut} Başarısız\n${error.stack}`);
    }
		
};