const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "." // تقدر تغيره

client.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
return channel.send("****Welcome to Knights. Please Join in Knights Shop :** :gear: https://discord.gg/EJate6v**")
    }
    )});

client.login(process.env.TOKEN)
