const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "." // تقدر تغيره

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'knights');
 
  if (!channel) return;

  channel.send(`Welcome To Knights ${member}`);/// رسائل ترحيب
});
 
const invites = {};
 
const wait = require('util').promisify(setTimeout);
 
client.on('ready', () => {
  wait(1100);
 
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});





client.login(process.env.TOKEN)
