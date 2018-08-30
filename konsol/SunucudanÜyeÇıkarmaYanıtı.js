//Octopus by R4dar
//
//v2

const winston = require('winston')
var logger = new (winston.Logger)({
})
module.exports = member => {
    let guild = member.guild;

    function getDefaultChannel(guild) {

        if (guild.channels.exists("name", "giriş-çıkış"))
            return guild.channels.find("name", "giriş-çıkış");

        return guild.channels
            .filter(c => c.type === "text" &&
                c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
            .sort((a, b) => a.position - b.position ||
                Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
            .first();
    }

    if (member.user.bot) {
        getDefaultChannel(member.guild).send(`${member.user} Sunucudan Çıkış Yaptı :wave:`)
    }
    else {
        getDefaultChannel(member.guild).send(`${member.user} Sunucudan Çıkış Yaptı :wave:`);

    }

}

