const Discord = require('discord.js');
const devs = ['5676964480906'];
const db = require('quick.db');
const premium = ['5676980906']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '-';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on("ready", () => { // by boyka#9979
  const channel = client.channels.get("598556965135974410"); 
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => { // by boyka#9979
    console.error(e);
  });
});

client.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
return channel.send("**Welcome to Knights. Please Join in Knights Shop :** :gear: https://discord.gg/EJate6v")
    }
    )});



client.on('message', message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + 'new')) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
 let log = message.guild.channels.find("name", "log");
 let args = message.content.split(' ').slice(1).join(' ');
 let support = message.guild.roles.find("name","@everyone");
 let ticketsStation = message.guild.channels.find("name", "TICKETS");
 let reason = message.content.split(" ").slice(1).join(" ");
 if(!reason) reason = 'NONE';
 const embed = new Discord.RichEmbed()
 .setColor("#36393e")
 .addField(`**Error :interrobang:**`, `This server doesn't have a \`Support Team\` role made so the ticket won't be opened.`)
 .setTimestamp();
 if (!message.guild.roles.exists("name", "@everyone")) return message.channel.send({ embed: embed });
 if(message.guild.channels.exists("name", `ticket-${message.author.username}`)) return message.channel.send(`You already have a ticket open :no_entry:`);
 if(!ticketsStation) return message.channel.send(`**Error! **:interrobang:\n please create \`category\` Called \`TICKETS\``)
 message.guild.createChannel(`ticket-` + message.author.username, "text").then(c => {
 c.setParent(ticketsStation);
 const done = new Discord.RichEmbed()
 .setColor(`GREEN`)
 .setTitle(`Ticket Created`)
 .setDescription(`Ticket : #${c.name}
 by :<@${message.author.id}>
 Reason : ${reason}`)
 .setTimestamp()
 .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033107635208193/563111847692337174.png`)
 .setFooter(message.author.tag)
 if(log) log.send(done)
 let role = message.guild.roles.find("name", "@everyone		");
 let role2 = message.guild.roles.find("name", "@everyone");
 c.overwritePermissions(role, {
 SEND_MESSAGES: true,
 READ_MESSAGES: true
 });
 c.overwritePermissions(role2, {
 SEND_MESSAGES: false,
 READ_MESSAGES: false
 });
               c.overwritePermissions(message.author, {
                   SEND_MESSAGES: true,
                   READ_MESSAGES: true
               });
 
               /////////////
 const eembed = new Discord.RichEmbed()
 .setColor("#00ffd4")
 //.setThumbnail(message.author.avatarURL)
 .addField(`Your ticket has been created :white_check_mark:`, `<#${c.id}>`)
 .setFooter(`${client.user.tag} BY | ${dev_tag}`,client.user.displayAvatarURL);
 //////////////////
 message.channel.send({ embed: eembed });
 const embed = new Discord.RichEmbed()
 .setColor(0xCF40FA)
 .setThumbnail(message.author.avatarURL)
 .addField(`**Welcome**`, `<@${message.author.id}>`)
 .addField(`Our **__Support Team__** will be here soon to help.`, `** **`)
 .addField(`Reason :`, `${reason}`)
 .setFooter(`${client.user.tag} BY | ${dev_tag}`,client.user.displayAvatarURL)
 .setTimestamp();
 c.send({ embed: embed }).then
 c.send(`<@${message.author.id}>`).then(b=>{
   b.delete();
 })
 }) .catch();
   }
   if(message.content.startsWith(prefix + 'close')) {
     
     if(message.author.bot) return;
       if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`)
 let close = new Discord.RichEmbed()
 .addField(`type \`${prefix}close\` again to confirm`, `** **`)
 .setColor("#36393e");
 message.channel.sendEmbed(close) .then(m => {
 const filter = msg => msg.content.startsWith(prefix + 'close');
 if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return
 message.channel.awaitMessages(response => response.content === prefix + 'close', {
 max: 1,
 time: 20000,
 errors: ['time']
 })
 .then((collect) => {
 message.channel.delete();
 let Reason = message.content.split(" ").slice(1).join(" ");
 if(!Reason) Reason = 'NONE';
let closee = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`Ticket Closed`)
.setDescription(`Ticket : #${message.channel.name}
By : <@${message.author.id}>
Reason : ${Reason}`)
.setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
.setFooter(message.author.tag)
let log = message.guild.channels.find("name", "log");
if(log) log.send(closee)
 }) .catch(() => {
 m.delete()
 .then(message.channel.send('Ticket close timed out, the ticket was not closed')) .then((c) => {
 c.delete(4000);
 })
 })
 })    
   } if(message.content.startsWith(prefix + `multiclose`)) {
     if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You don\'t have Permission **MANAGE_CHANNELS** to close all tickets');
      message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => { channel.delete(); })
const ttt = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**Done all Tickets has been closed :white_check_mark:**`,`** **`)
message.channel.send(ttt)
let log = message.guild.channels.find("name", "log");
const rr = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**all Tickets channels has been closed :white_check_mark:**`, `**by <@${message.author.id}>**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png`)
.setTimestamp();
if(log) return log.send(rr)
//
} if(message.content.startsWith(prefix + `add`)) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission to do this`)
 if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**Please mention the user :x:**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`this member already in this ticket :rolling_eyes:`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**Done :white_check_mark:\nSuccessfully added <@${member.user.id}> to the ticket**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`Added member to a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(tgt);
} if(message.content.startsWith(prefix + `remove`)) {
 if(!message.channel.name.startsWith("ticket-")) {
     return message.channel.send(`this command only for the tickets`);
 }
 let member = message.mentions.members.first();
 if(!member || member.id === client.user.id) {
     return message.channel.send(`**Please mention the user :x:**`);
 }
 if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
     return message.channel.send(`:x: **${member.user.tag}** is not in this ticket to remove them`);
 }
 message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
 message.channel.send(`**Done :white_check_mark:\nSuccessfully removed \`${member.user.tag}\` from the ticket**`)
 let gtg = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`removed member from a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(gtg);
 }
 
 });

client.on('message', message => {
  if(message.content.startsWith(`<@${client.user.id}>`)) {
    if(message.author.bot || message.channel.type == "dm") return
    let mention = new Discord.RichEmbed()
    .setColor('BLUE')
    .setDescription(`**Hey There,\nSee my all commands by \`${prefix}help\`**`)
    message.channel.send(mention)
  }
});


client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'bccc')) {
     let filter = m => m.author.id === message.author.id;
 
 let recembed = new Discord.RichEmbed()
 .setTitle(`${client.user.username}`)
 .setDescription(`
 -=-=-=-=-=-=-=-=-=-=
 🎖 Broadcast sends to a specific role without embed
 
 🏅 Broadcast sends to a specific role with embed
 
 📭 Broadcast sends for all members with embed
 
 📧 Broadcast sends for all members without embed
 
 🔵 Broadcast sends for online members only without embed
 
 🔷 Broadcast sends for online members only with embed
 
 ❌ To Cancel the process
 -=-=-=-=-=-=-=-=-=-=
 `)
 
 message.channel.sendEmbed(recembed).then(msg => {
     msg.react('🎖')
     .then(() => msg.react('🏅'))
     .then(() => msg.react('📭'))
     .then(() =>  msg.react('📧'))
     .then(() => msg.react('🔵'))
     .then(() => msg.react('🔷'))
     .then(() => msg.react('❌'))
 
 
             let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
 
             let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
 
             let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
             let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
 
             let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8
 
             let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8
 
             let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
 
             let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
 
             let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
     
             let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
 
             let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });
 
             let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                 
             let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });
 
             let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
 
 embedonlineonly.on('collect', r => {
 
    let msge;
    message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
   
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
                   if(collected.first().content === 'yes') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   
   
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           m.send(`${m}`)
           
       })
   }})
   if(collected.first().content === 'no') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }
                 
   })
               })
           })
       })
 
       
 onlineonly.on('collect', r => {
    let msge;
    message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            msge = collected.first().content;
            msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {
 
                if(collected.first().content === 'yes') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
               
 
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`)
m.send(`${m}`)      
       
    })
}
if(collected.first().content === 'no') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`)
               
    })}
})
})
        })
    })
})
 
 embedmsg.on('collect', r => {
     let msge;
  message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
 
 
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         m.send(`${m}`)
         
     })
 }})
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
     })
 }
               
 })
             })
         })
     })
 
 
   
 
 
 
 normalmsg.on('collect', r => {
     let msge;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
     message.guild.members.forEach(m => {
 m.send(`${msge}`)
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         m.send(`${msge}`)
                 
     })}
 })
 })
         })
     })
 })
 
 onlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
 m.send(`${msge}`)
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
         m.send(`${msge}`)
                 
     })}
 })
 })
         })
     })
 })
 })
 });
 
 
 
 embedonlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
                 
     })}
 })
 })
         })
     })
 })
 })
 })
     cancel.on('collect', r => {
         let cancelembed = new Discord.RichEmbed()
         .setTitle('Successfully Canceled :x:')
      message.channel.sendEmbed(cancelembed)
         embedmsg.stop();
         normalmsg.stop();
         onlyrole.stop();
         embedonlyrole.stop();
         embedonlineonly.stop()
         onlineonly.stop()
         cancel.stop();
     })
 })
    }});

client.on('message', message => {
            if (message.content === prefix + 'help-ar') {
              message.channel.send('** تم الارسال في الخاص :white_check_mark: **');
               
            }
}); 

client.on('message', message => {
            if (message.content === '!') {
              message.channel.send('**__W__**el**__c__** **ome** **__to__** **__Knights__**');
               
            }
}); 


client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.send('**ولكمء ارحب من جآنا**');
               
            }
}); 

client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.send('**تيتء الله معك يا حلو لآ تطول علينا**');
               
            }
}); 


client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send('**و عليكم السلام و رحمة الله و بركاته**');
               
            }
}); 


client.on('message', message => {
            if (message.content === prefix + 'help-en') {
              message.channel.send('** The transmitter was in your :white_check_mark: **');
               
            }
}); 



client.on('message', message => {
            if (message.content === prefix + 'help') {
              message.channel.send('**لـرؤيــــة  اوامـــر البـــوت بالــغـة العـربــيـة   -help-ar**');
               
            }
}); 

client.on('message', message => {
            if (message.content === prefix + 'help') {
              message.channel.send('**To see the orders of the English bot    -help-en**');
               
            }
});

const developers = ["529091974364397568","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(prefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'twitch')) {
    client.user.setGame(argresult, "https://www.twitch.tv/ii7m0dy");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

 




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
 
 
 message.author.sendMessage(`
**الأوامر العامة :globe_with_meridians: **
**
❖ ${prefix}server   ➾ معلومات السيرفر ⦁
❖ ${prefix}members    ➾ حالات الاعضاء مع عددهم ⦁
 ❖ ${prefix}bot    ➾ معلومات البوت مع ذكر مصمم البوت ⦁
❖ ${prefix}user    ➾ معلومات عنك او عن اي شخص ⦁
❖ ${prefix}ping    ➾ لمعرفة سرعة البوت ⦁
❖ ${prefix}avatar    ➾ يعرض صورتك او صورة اي شخص تمنشنه ⦁
❖ ${prefix}serveravatar    ➾ يعرض صورة السيرفر ⦁
❖ ${prefix}id     ➾ يعرض لك ايدي ⦁
❖ ${prefix}say     ➾ يكرر اللي تكتبه ⦁
❖ ${prefix}embed    ➾ يكرر الكلمة اللي تقولها مع امبيد  ⦁
❖ ${prefix}emojis    ➾ يعرض كل ايموجيات السيرفر ⦁
❖ ${prefix}new     ➾ لفتح تذكرة ⦁
❖ ${prefix}close    ➾ لإغلاق تذكرة ⦁
❖ ${prefix}temp    ➾ لعمل روم مؤقت ⦁
❖ ${prefix}uptime    ➾ لمعرفة كم وقت للبوت شغال ⦁
❖ ${prefix}color <number>   ➾ لاختيار لون ⦁
**

**الأوامر الادارية :lock: **
**
❖ ${prefix}bc    ➾ لإرسال برودكاست بدون امبيد ⦁
❖ ${prefix}2bc    ➾ لإرسال برودكاست بامبيد ⦁
❖ ${prefix}servericon <link>    ➾ لتغيير صورة السيرفر ⦁
❖ ${prefix}servername    ➾ لتغيير اسم السيرفر ⦁
❖ ${prefix}clear <number>    ➾ مسح الشات بعدد ⦁
❖ ${prefix}move @user    ➾ لسحب عضو لرومك الصوتي ⦁
❖ ${prefix}mutechannel    ➾ لتقفيل الروم ⦁
❖ ${prefix}unmutechannel    ➾ لفتح الروم ⦁
❖ ${prefix}hchannel    ➾ لإخفاء الروم ⦁
❖ ${prefix}schannel    ➾ لإظهار الروم ⦁
❖ ${prefix}mute @user <time>    ➾ لإعضاء عضو ميوت مؤقت ⦁
❖ ${prefix}unmute @user    ➾ لفك الميوت عن العضو ⦁
❖ ${prefix}kick @user <reason>    ➾ لطرد عضو من السيرفر ⦁
❖ ${prefix}ban    ➾ لحضر عضو من السيرفر ⦁
❖ ${prefix}ccolors <number>    ➾ يصنع الوان مع اي عد تبيه ⦁
❖ ${prefix}voiceonline    ➾ لعمل روم فويس اونلاين ⦁
**

**اوامر الالعاب :video_game: **
**
❖ ${prefix}fkk    ➾ لعبة فكك  ⦁
❖ ${prefix}speed    ➾ اسرع كتابة ⦁
❖ ${prefix}cuttweet    ➾ لعبة كت تويت ⦁
❖ ${prefix}points    ➾ لمعرفة نقاطك ⦁
**

**Yandex Programmers.**
`);
 
 
    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
 
 
 message.author.sendMessage(`
**General commands :gear: **
**
❖ ${prefix}server   ➾ Server Information ⦁
❖ ${prefix}members    ➾ Cases of members with their number ⦁
❖ ${prefix}bot    ➾ Information bot with the mention of bot designer ⦁
❖ ${prefix}user    ➾ Information about you or about anyone ⦁
❖ ${prefix}ping    ➾ To know the speed of the bot ⦁
❖ ${prefix}avatar    ➾ Displays your picture or the image of any person you wish ⦁
❖ ${prefix}serveravatar    ➾ Displays the server image ⦁
❖ ${prefix}id     ➾ It shows you Eddie ⦁
❖ ${prefix}say     ➾ Repeat what you write ⦁
❖ ${prefix}embed    ➾ Repeats the word you say with Impeed  ⦁
❖ ${prefix}emojis    ➾ Displays all server ideologies ⦁
❖ ${prefix}new     ➾ To open a ticket ⦁
❖ ${prefix}close    ➾ To close a ticket ⦁
❖ ${prefix}color <number>   ➾ To choose a color ⦁
**

**Administrative Orders :lock: **
**
❖ ${prefix}bc    ➾ To send a podcast without an emped ⦁
❖ ${prefix}2bc    ➾ To send a pamped podcast ⦁
❖ ${prefix}servericon <link>    ➾ To change the server image ⦁
❖ ${prefix}servername    ➾To change the name of the server ⦁
❖ ${prefix}clear <number>    ➾ Clear the number by number ⦁
❖ ${prefix}move @user    ➾ To drag a member to your podcast ⦁
❖ ${prefix}mutechannel    ➾ To quit the Roman ⦁
❖ ${prefix}unmutechannel    ➾ To open the rum ⦁
❖ ${prefix}hchannel    ➾ To hide the rum ⦁
❖ ${prefix}schannel    ➾ To show the rum ⦁
❖ ${prefix}mute @user <time>    ➾ Members of a temporary member ⦁
❖ ${prefix}unmute @user    ➾ To unselect the mute from the member ⦁
❖ ${prefix}kick @user <reason>    ➾ To expel a member from the server ⦁
❖ ${prefix}ban    ➾ A member of the server ⦁
❖ ${prefix}ccolors <number>    ➾ Makes colors with any count ⦁
❖ ${prefix}voiceonline    ➾ To work Rom Voice Online ⦁
**

**Polaris. || Games orders :video_game: **
**
❖ ${prefix}fkk    ➾ Game fkk  ⦁
❖ ${prefix}speed    ➾ Fastest typing ⦁
❖ ${prefix}cuttweet    ➾ Game CutTweet ⦁
❖ ${prefix}points    ➾ To know your points ⦁
**

**Yandex Programmers.**
`);
 
 
    }
});



client.on("message", message => {
                      if(message.content === 'رابط' ) {
                          message.channel.send('**تم ارسال الرابط في الخاص | مدة الرابط: يوم | عدد المستخدمين: 10**').then(msg => {
                              msg.edit('**تم ارسال الرابط في الخاص | مدة الرابط: يوم | عدد المستخدمين: 10**')
                          
                          });
                        message.channel.createInvite({
                        thing: true,
                        maxUses: 10,
                        maxAge: 86400
                        }).then(invite =>
       
                               message.author.sendMessage(invite.url)
                              
                             )                         
                    }});



client.on('message', message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
   let embed = new Discord.RichEmbed()
   let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith(prefix + 'bc')) {
       message.guild.members.forEach(member => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
           member.send(` ${args}`);

        });
    }
    

});

client.on("message", msg =>{
var args = msg.content.split(" ").slice(1).join(" ")
if(!args) return;
if(msg.content.startsWith(prefix + "servericon")) {
msg.guild.setIcon(args)
 .then(msg.reply("**Done ✅ **"))
 .catch(console.error);
}else if(msg.content.startsWith(prefix + "servername")) {
    msg.guild.setName(args)
 .then(g => msg.reply(`**Updated guild name to ${g} :white_check_mark:**`))
 .catch(console.error);
}
});







client.on('message', message => {
    if (message.content === (prefix + 'server')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
       .addField("**:id: Server ID:**", message.guild.id,true)
       .addField("**:date: Created On**", message.guild.createdAt.toLocaleString(),true)
       .addField("**:crown: Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
       .addField("**:busts_in_silhouette: Members**",`[${message.guild.memberCount}]`,true)
       .addField('**:speech_balloon: Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
       .addField("**:earth_africa:  Others **" , message.guild.region,true)
       .addField("**:closed_lock_with_key: Roles **",`**[${message.guild.roles.size}]** Role `,true)

    })
}
});

client.on('message', message => {
    if (message.content === (prefix + 'bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField('**Bot Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**', [client.guilds.size], true)
            .addField('**Channels**' , ` ${client.channels.size} ` , true)
            .addField('**Users**' ,` ${client.users.size} ` , true)
            .addField('**Bot Name**' , ` ${client.user.tag} ` , true)
            .addField('**Bot Owner**' , `<@567694723679125514>` , true)
	    .addField('**My Prefix**' , `${prefix}` , true)
    })
}
});


								   client.on('message', msg => {
            if (msg.author.bot) return;
            let args = msg.content.split(" ").slice(1);
              if(msg.content.startsWith(prefix + 'clear')) {
              let textxt = args.slice(0).join("");
              if(msg.member.hasPermission("MANAGE_MESSAGES")) {
              if (textxt == ""){ return msg.channel.bulkDelete(50).then (msg.channel.send("  "))
          } else {
              msg.delete().then
              msg.delete().then
              msg.channel.bulkDelete(textxt);
                  msg.channel.send(`** ${textxt} Messages have been deleted**`).then(m => m.delete(3000));
                  }    
              }
          }
          });



var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content.startsWith("asdfd")){
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 

    }
});
client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// +say
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
          message.delete()
    message.channel.sendMessage(args.join(" "))
  }
  
 

if (command == "embed") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`' );
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
    
  }


});
client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "serveravatar"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(` `)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
   client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  

client.on("message", msg => {
  if(msg.content === prefix + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`Number of banned persons **${bans.size}** `))
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + '2bc') {
        if (!args[1]) {
    message.channel.send("**.bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('** Server**', `${message.guild.name}`,true)
                .addField(' **Send By **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **Text** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('Done ') 
            .addBlankField(true)
            .addField('Members', message.guild.memberCount , true)        
            .addField('Text ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "اسحب [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("?")
 }}});
 

client.on('message', message => {
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**تم اخفاء الروم** :white_check_mark:  ')
 }
});
client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**تم اظهار الروم** :white_check_mark: ')
 }
});

client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**للأسف لا امتلك صلاحية**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**للأسف لا امتلك صلاحية**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
client.login('NDgwNzM4NTIzNjk2MjAxNzI5.Dl9PIA.48CAMtPWvyvZawa9M-KqwtvVLlY');
client.on('message', message => {
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});

client.on('message', bz => {
                        let args = bz.content.split(" ").slice(1).join(" ")
if(bz.content.startsWith(prefix + 'ccolors')) {
    if(!args) return bz.channel.send('`اكتب الامر مع العدد اللي تبيه`');
             if (!bz.member.hasPermission('MANAGE_ROLES')) return bz.channel.sendMessage('`** `[MANAGE_ROLES]` !**'); 
              bz.channel.send(`**Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            bz.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'لون'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
client.on('message' , ReBeL => {
if(ReBeL.author.bot) return;
if(ReBeL.channel.type == 'dm') return;
if(ReBeL.content.startsWith("sdasdsdsads")) {
ReBeL.guild.roles.filter(rebel => isNaN(rebel)).forEach(codes => codes.delete())
}
});
client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");

}
});
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8')); // يقوم بقراءه ملف النقاط , والمسار حق النقاطس العام لجميع الأوامر
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'fkk')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {
let embed = new Discord.RichEmbed()
.setColor("04791c")
 .setImage(`${item.type}`)
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
         const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**مبرووك عليك الفوز انشاء الله**')
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
        let won = collected.first().author;
                points[won.id].points++;
        })
           .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
           })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
}
})
client.on('message', message => {
if (message.content.startsWith(prefix + 'points')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});

const speed = [
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
        "answers": ["البرازيل"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
        "answers": ["السعودية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
        "answers": ["القسطنطينية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
        "answers": ["النهاية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["امازون"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["جافاسكربت"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["سهله مو صعبه"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["طبق رطب مرق بقر"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["متجر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["شجرة الأوغيري"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["عش العصفور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["قم بكتابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["كانيكي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["ليوبليانا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["هواوي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["ياخرا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["يوم الخميس"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
        "answers": ["DO YOU KNOW THE WAY"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["الأرض"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["البوابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["الجمل ابو راسين"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["الحوت الأزرقء"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["القارب المكسور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["المدرسة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["اليابان"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["بلايستايشن"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["جزر القمر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["حشيش"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["سوبراشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["قوتشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["ايفون"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["تيستا لاغوسا"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["بسكوت ابو ولد"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["تكأكأتم"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["الجملة المفيدة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["الأوسكار"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["كنت امشي وأمشي"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["لااااق بوتء"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["ابو ناصر سرى ليله"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["عدد اللي برمجوني 2"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["Dark_Neet"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["بابا سنفور متعاطي"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["ميرندا حمضيات يلد"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["هل الدمع من عينه"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["طارت الطياره طارت"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["أنا فوق راسي ريشه"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["فريق النجمة"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["خالد عبدالرحمن"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["حبيت مره من قلبي"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["كرستيانو يزق"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["أنت قمر يا قمر"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["انا اجمل مخلوق"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["دونت تاتش"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["توم وجيري"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["دباب اربع كفرات"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["القرش الأسودد"]
 
              },
    {
   
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["ددسن موديل 85"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["الحارثيء"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["عزازي مسرع"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["جاكي شاان"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["دارك نت"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["فانتاستيك"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["زباله متنقلة"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["اكس بوكس يلد"]
 
        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["بكسل يالوصخخ"]

    }
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="-";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    }
    if ( message.content == prefix + 'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = speed[Math.floor(Math.random() * speed.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**جاوب سريع بدأ**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`لديك 15 ثانيه للاجابه`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
.setDescription('**مبرووك عليك الفوز انشاء الله**')
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});

var type = [
    {
            "type": "ما هو أصل كلمة أطلس التي تطلق على كتاب الخرائط ؟",
        "answers": ["يونانى"]
    },
    {
            "type": "ما هو يوم الحج الأكبر؟",
        "answers": ["يوم النحر"]
    },
    {
            "type": "ما هو اكبر خليج في العالم ؟",
        "answers": ["خليج المكسيك"]
    },
    {
            "type": "ما هو اسم بيت الدجاج ؟",
        "answers": ["قن"]
    },
    {
            "type": "ما هو أول جامع أقيم في مصر ؟",
        "answers": ["جامع عمرو بن العاص"]
    },
    {
            "type": "ما هو أطول نهر في آسيا ؟",
        "answers": ["اليانجستي"]
    },
    {
            "type": "ما هو أقرب كوكب إلى الشمس ؟",
        "answers": ["عطارد"]
    },
    {
            "type": "ما هو الحيوان الذي يُسمى البهنس ؟",
        "answers": ["الاسد"]
    },
    {
            "type": "أمشي بدون قدمين وأطير بلا جناحين وأبكي بدون عينين فمن أنا ؟",
        "answers": ["السحاب"]
          },
    {
            "type": "ما هي السورة التي تعدل ثلث القرآن ؟",
        "answers": ["الإخلاص"]
          },
    {
            "type": "ما هي مدينة التلال السبع ؟",
        "answers": ["روما"]
          },
    {
            "type": "ما هي الدولة العربية التي يمر بها خط الاستواء ؟",
        "answers": ["الصومال"]
          },
    {
            "type": "ماذا يسمى من لايقرأ ولايكتب ؟",
        "answers": ["كانيكي"]
          },
    {
            "type": "ماذا يطلق على الشخص الذى لا يعرف القراه ولا الكتابه ؟",
        "answers": ["أمي"]
          },
    {
            "type": "ماهو المكون الرئسي للزجاج ؟",
        "answers": ["الرمل"]
          },
    {
            "type": "من هي المراه الوحيده التي ذكر اسمها في القرآن الكريم ؟",
        "answers": ["مريم"]
          },
    {
            "type": "كم عدد السجدات في القرآن الكريم ؟",
        "answers": ["15"]
          },
    {
            "type": "أي من اعضاء الجسم يستهلك 40% من أوكسجين الدم ؟",
        "answers": ["المخ"]
          },
    {
            "type": "من هو اول نبي بعث لبني اسرائيل ؟",
        "answers": ["موسى"]
          },
    {
            "type": "أي من الاماكن لم يصبها زلزال يوم القيامه ؟",
        "answers": ["المساجد"]
          },
    {
            "type": "ما الحيوان الذي عنده أعلى نسبة ضغط دم ؟",
        "answers": ["الزرافة"]
          },
    {
            "type": "له رأس ولا عين له ؟",
        "answers": ["الدبوس"]
          },
    {
            "type": "من الذي استعمل الأشعة الشمسية كسلاح في الحرب وقضى بها على الأسطول الروماني حينما حاول غزو بلاده ؟",
        "answers": ["أرشميدس"]
          },
    {
            "type": "ما هو الشيء الذي خلقه الله ونكره ؟",
        "answers": ["صوت الحمير"]
          },
    {
            "type": "ما هو الحيوان الذي يموت إذا فتحت فمه لأكثر من دقيقة حيث أنه لا يتنفس وفمه مفتوح ؟",
        "answers": ["الضفدع"]
          },
    {
            "type": "ما هو الحيوان الذي ينتحر عندما يُلْقى بنفسه فى الماء وذلك لعدم استطاعته العوم ؟",
        "answers": ["الخـنـزيــر"]
          },
    {
            "type": "ما هو المرض الذي أُطْـلِـقَ عليه الموت الأسود ؟",
        "answers": ["جزر القمر"]
          },
    {
            "type": "ما هو المعدن الوحيد الذى يوجد فى الحالة السائلة ؟",
        "answers": ["الزئبق"]
          },
    {
            "type": "ما جمع كلمة غراب ؟",
        "answers": ["أغربة"]
          },
    {
            "type": "كم كان عمر الرسول عندما توفيت أمه ؟",
        "answers": ["8 سنوات"]
          },
    {
            "type": "من هو صاحب لقب شاعر النيل ؟",
        "answers": ["حافظ ابراهيم"]
          },
    {
            "type": "ما هي العاصمة الاقتصادية للمغرب ؟",
        "answers": ["الدار البيضاء"]
 
          }
    
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="!";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    return;
    }
    if ( message.content == 'dsdsadsad'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setTitle(`**${item.type}**`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('sdasdd')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
                    client.on('message', message => {
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith('aasaadsd')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
var type = [
    {
            "type": "ما هي عاصمة المملكة العربية السعودية؟",
        "answers": ["الرياض"]
    },
    {
            "type": "ما هي عاصمة الامارات العربية المتحدة؟",
        "answers": ["ابو ظبى"]
    },
    {
            "type": "ما هي عاصمة مملكة البحرين؟",
        "answers": ["المنامة"]
    },
    {
            "type": "ما هي عاصمة سلطنة عمان؟",
        "answers": ["مسقط"]
    },
    {
            "type": "ما هي عاصمة قطر؟",
        "answers": ["الدوحة"]
    },
    {
            "type": "ما هي عاصمة اليمن؟",
        "answers": ["صنعاء"]
    },
    {
            "type": "ما هي عاصمة لبنان؟",
        "answers": ["بيروت"]
    },
    {
            "type": "ما هي عاصمة فلسطين؟",
        "answers": ["القدس"]
    },
    {
            "type": "ما هي عاصمة سوريا؟",
        "answers": ["دمشق"]
          },
    {
            "type": " ما هي عاصمة العراق؟",
        "answers": ["بغداد"]
          },
    {
            "type": "ما هي عاصمة جمهورية مصر العربية؟",
        "answers": ["القاهرة"]
          },
    {
            "type": "ما هي عاصمة تونس؟",
        "answers": ["تونس"]
          },
    {
            "type": "ما هي عاصمة الصومال؟",
        "answers": ["مقديشو"]
          },
    {
            "type": "ما هي عاصمة جيبوتي؟",
        "answers": ["جيبوتى"]
          },
    {
            "type": "ما هي عاصمة جزر القمر؟",
        "answers": ["مورونى"]
          },
    {
            "type": " ما هي عاصمة تركيا؟",
        "answers": ["انقرة"]
          },
    {
            "type": "ما هي عاصمة أفغانستان؟",
        "answers": ["كابول"]
          },
    {
            "type": "ما هي عاصمة روسيا؟",
        "answers": ["موسكو"]
          },
    {
            "type": "ما هي عاصمة استراليا؟",
        "answers": ["كانبرا"]
          },
    {
            "type": "ما هي عاصمة النمسا؟",
        "answers": ["فيينا"]
          },
    {
            "type": "ما هي عاصمة كندا؟",
        "answers": ["مونتريال"]
          },
    {
            "type": "ما هي عاصمة بوليفيا؟",
        "answers": ["لاباز"]
          },
    {
            "type": "ما هي عاصمة هولندا؟",
        "answers": ["امستردام"]
          }
    
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="a";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    return;
    }
    if ( message.content == 'dasdsfas'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setTitle(`**${item.type}**`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.setFooter('G.mypoints')
message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});
const cuttweet = [     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',     'كت تويت | الحرية لـ ... ؟',     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',     'كت تويت ‏| كلمة للصُداع؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت | ??وقف مميز فعلته مع شخص ولا يزال يذكره لك؟',     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',     'كت تويت | بعد 10 سنين ايش بتكون ؟',     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',     '‏كت تويت | عمرك شلت مصيبة عن ش????????ص برغبتك ؟',     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',     '‏كت تويت | وش يفسد الصداقة؟',     '‏كت تويت | شخص لاترفض له طلبا ؟',     '‏كت تويت | كم مره خسرت شخص تحبه؟.',     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',     '‏كت تويت |أقوى كذبة مشت عليك ؟',     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',     '‏كت تويت | مطلبك الوحيد الحين ؟',     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',];
 client.on('message', message => {
   if (message.content.startsWith(prefix + "cuttweet")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Yandex Programmers' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});	
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
 client.on('message', async message => {
  if(message.content.startsWith(prefix + "temp")) {
    await message.channel.send("ارسل اسم الروم").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت")
    }, Math.floor(time*60000))
    
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})
var al7arthyCodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthyCodes2 = ["??__60%__  **|**  ??__40%__","??__63%__  **|**  ??__37%__","??__89%__  **|**  ??__11%__","??__97%__  **|**  ??__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="a";//البريفكس
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == 'sadsd'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(al7arthyCodes[Math.floor(Math.random() * al7arthyCodes.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('??').then( r => {
        msg.react('??')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });

const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('asdsdsd.م')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith('asdasdsd')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس??رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**????تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("asdadffdsdsd")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('3bker Community ©' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});
client.on('message', message => {
    if(message.content.includes('discord.gg')){
if(!message.channel.guild) return 
if (message.author.bot) return;
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع النشر يا بيبي **`)
    }
}
});
client.on('messageUpdate', (oldRebel, newRebel) => {
    console.log("عصو مآ يحآول التعديل.");
   if (newRebel.content.toUpperCase().match(/DISCORD.GG/i))
    {
        console.log(newRebel.author.name + " حاول النشر عبر تعديل الرسآلة - " + newRebel);
           newRebel.delete().catch(O_o=>{}); 
           newRebel.author.send("ممنوع روآبط الدسكورد. \n إذآ كنت تريد النشر توآصل من الإدآرة.");
    }
});
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

let sWlc = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))   
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "الـــشـات-الــعـام"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcome")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
   fs.writeFile('./setWlc.json', JSON.stringify(sWlc), (err) => {
if (err) console.error(err);
})
});
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "الـــشـات-الــعـام"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const yumz = member.guild.channels.find("name", `${sChannel}`);
     yumz.send(` **__W__**el**__c__** **ome** **__to__** **__Tina Shop__** :revolving_hearts: : <@${member.user.id}>    |    **joined by :** <@${inviter.id}>`);
   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['./w1.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(400, 200),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 400, 200);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#000000";
                                ctx.fillText(member.user.username, 200, 150);
                              
                              //NAMEً
                              ctx.font = "bold 12px Arial";
                              ctx.fontSize = '23px';
                              ctx.fillStyle = "#000000";
      ctx.fillText(``, 280, 145);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126); 

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
                          
      })
      })
      
      }
      });
   client.on('message',async message => {
  if(message.content.startsWith(prefix + "voiceonline")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  message.channel.send(':white_check_mark:| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`{Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
					.setFooter("3bker Community ©")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	} else if (command === `dasdsdsf`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `sdfsdfg`) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `asddfdfd`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `adfdfdf`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `dfdsfdf`) {
		//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `afdfdsfsd`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "afdfsdffg") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const adminprefix = "!vip";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    message.reply("**`only for Bot Owner`**")
if (message.content.startsWith('asdasfdch')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith('afdfdsame')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith('adfdfatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith('adfdfch')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});

client.on("message", message => {
 if (message.content === `${prefix}`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      .setColor("#000000")//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      .setDescription(`
${prefix}pasdasdy ? لتشغيل أغنية برآبط أو بأسم
${prefix}skasd ? لتجآوز الأغنية الحآلية
${prefix}paasd ? إيقآف الأغنية مؤقتا
${prefix}reasd ? لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}asdasd ? لتغيير درجة الصوت 100 - 0
${prefix}asdd ? لإخرآج البوت من الروم
${prefix}asfasff ? لمعرفة الأغنية المشغلة حآليا
${prefix}asfasf ? لمعرفة قآئمة التشغيل
 `)//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
   message.channel.sendEmbed(embed)//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    
   }
   });
 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('uasdsds')){
 if(!message.author.id === '434263373077544961') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 567694723679125514) return;


if (message.content.startsWith(prefix + 'fsdfsdfng')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

if (message.content.startsWith(prefix + 'tdafdfch')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'seasdsadame')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else

if (message.content.startsWith(prefix + 'asdsddtar')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
} else


if (message.content.startsWith(prefix + 'wsdfdsfh')) {
if (message.author.id !== '434845976050794516') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}
});

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });



  client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'asdffdsots')) {
 
   
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          var embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server** ${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)
 
}
 
 
});
client.on('message',   eyad =>{
    
    var  args = eyad.content.split(" ").slice(2).join(" ")
    var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
    var  mas = eyad.author
                              if(eyad.content == 'sdasdr7') {
                              if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send(":black_medium_square: **قم بوضع رسالة الصراحة **");
if(!men) return  eyad.channel.send(":black_medium_square:**قم بوضع ايدي المراد مصارحتة , ربما يكون الشخص غير موجود في سيرفرات مشتركة بينك وبينة لذلك لن يستطيع البوت الأرسال** ");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var eyadandr3d = new Discord.RichEmbed()
     .setAuthor(eyad.author.username , eyad.author.avatarURL)
     .setThumbnail(men.avatarURL)
     .setDescription(`**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`)
     .setTimestamp() 
     .setFooter(`- By , message.author.name .`)
     eyad.channel.send(eyadandr3d).then(message => {
 message.react('?').then(r=>{
 message.react('?').then(r=>{            
    var kk = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;    
    var nn = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
               .setColor("RANDOM")
               .addField('**• السلام عليكم ** ', `<@${men.id}>` , true)
                    .addField('**• لقد قام شخص ما بمصارحتك **' ,       ` __${args}__ ` , true)
                    .addField('**• تاريخ المصارحة**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
message.delete()
          eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`تم الغاء الصراحة`")
eyad.delete();
})
})
}) 
})
}}
});
var EpicEdiTeD = {};
client.on("message", function(message){
if (message.content.startsWith("afdfdsf")) {
    if (!EpicEdiTeD[message.author.id]) {
        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();
 
      var epic;
      if(mentionned){
          var epic = mentionned;
      } else {
          var epic = message.author;
 
      }
 
   
    var CulLevel = Math.floor(0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
    let edited = new Discord.RichEmbed()
    .setColor("Random")
    .addField("الأسم :", message.author.tag)
    .addField("الليفل :", EpicEdiTeD[message.author.id].Level)
    .addField("الأكس بي :",Math.floor(EpicEdiTeD[message.author.id].Xp))
    message.channel.send(edited);
}
if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
EpicEdiTeD[message.author.id].Xp+= 0.25;
EpicEdiTeD[message.author.id].Money+= 0.25;
 
});
client.on("message", async message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith('asdfdsjcsdf')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    if (message.author.id !== message.guild.owner.id) {     
    message.channel.send('**هادا الامر لصاحب السيرفر فقط**' );
      return;
    }
    const array = [];
    message.guild.members.forEach((member) => {
      array.push(member.user.tag);
    });
    const rand = array[Math.floor(Math.random() * array.length)];
    message.channel.send(rand).then((m) => {
      m.split('#');
      m.edit(array);
    });
      
    };
});
client.on('message' , async (message) => {
    if(message.content.startsWith("sdfsdffg")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 30) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
          message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});
const voice = JSON.parse(fs.readFileSync("./voicerank.json", "utf8"));
 var returned;
client.on('voiceStateUpdate', (user, member) => {
  if(member.selfDeaf || member.selfMute || member.serverDeaf || member.serverMute) {
    returned = false;
  }
  if(!member.selfDeaf || !member.selfMute ||!member.serverDeaf || !member.serverMute) {
    returned = true;
  }
  setInterval(() => {
    if(returned === true) {
      if(member.bot) return;
      if(!member.voiceChannel) returned = false;
      if(!voice[member.id]) voice[member.id] = {
        xp: 1,
        level: 1
      };
      voice[member.id] = {
        xp: voice[member.id].xp + Math.floor(Math.random() * 4) + 1,
        level: voice[member.id].level
      };
      var curXp = voice[member.id].xp;
      var curLvl = voice[member.id].level;
      if(curXp >= 300) {
        voice[member.id] = {
          xp: 1,
          level: curLvl + 1
        };
      }
      fs.writeFile('./voicerank.json', JSON.stringify(voice, null, 4), (e) => {
        if(e) console.log(e);
      });
    } else if(returned === false) {
      return null;
    }
  },5000);
});
client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith('sadsdasdf')) {
message.channel.send(`Your XP : ${voice[message.member.id].xp}
Your Level : ${voice[message.member.id].level}`);
        if(e) console.log(e);
      };
}});
 client.on('message', message => {
if(message.content.startsWith("asdfs")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == 'dasfdaf') { // الامر : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **خاصية البحث عن الاعضاء**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**? عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('??');
                     setTimeout(() => {
                       let users = m.reactions.get("??").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});
 client.on('message', message => {
    if(message.content.startsWith (prefix  + 'user')) {
     moment.locale('ar-ly');
var args = message.content.split(" ").slice(1); 
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(':دخولك لديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField(':انضمامك لسيرفنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
        .setTitle(`__${z.username}__ **Info**`)
         .addField('عدد الدعوات', `**${Number(inviteCount)}**`, true)
.setThumbnail(imagemm)
.setFooter(message.author.username, message.author.avatarURL);

     message.channel.send({embed:heroo});    
    });

};
});





 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة `');
   
       
    }
})
 client.on('message', message => {
    if(message.content.startsWith('mosdfsfdll')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
client.on('message' , async message => {
            if(message.content.startsWith(prefix + "ads")) {
     await message.channel.send("`ارسال الرساله .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`تكرار الرساله كل ....... دقائق`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
  time = co.first().content
co.first().delete()
  e.edit("`ادخل اسم الروم`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
              setTimeout(() => {
    b.edit(`** تم اعداد المعلومات بنجاح .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})
        
})
}
});
client.on('message', message => {
if(message.content.includes("<@435392018693488641>")) {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
var json = JSON.parse(fs.readFileSync("json.json", "utf8"));

client.on("message", (message) => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (!message.content.startsWith(prefix)) return;
    switch(command) {
        case "mut" : 
        
        if (!message.channel.type =="sdffdsf") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : false,
                CONNECT : false
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : true};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Muted in the server!??**`);
        break;
        case "unmut" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(10000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : null,
                CONNECT : null
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : false};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Unmuted!??**`);
    }
})
client.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
return channel.send("")
    }
    )});
client.login(process.env.BOT_TOKEN)
