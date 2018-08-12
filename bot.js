const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
    client.user.setActivity("By:REX || !help",{type: 'streaming'})
});







 


client.on("message", msg => {
           var prefix = "!";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})

  }

});


client.on("message", message => {
 if (message.content === "!help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

***__وصف عن البوت__***
**
فيه مانع نشر روابط
wlc تبي تسوي الترحيب سوي شات اسمه 
members تبي اذا دخل عضو يعطي رتبة سوي رتبة اسمه
في ترحيب بالخاص 
وفي ايضأ مانع السبام اذا حوال يسوي سبام يعطيه ميوت شات
سيتم اضافة اوامر جديده قريبا باذن الله 
**
***__Bot orders__***
**
『ping』لي راية بنقك
『id』لي رايت حالتك
『profile』 لي بروفايلك
『inv』لي دعوة البوت الي سيرفرك
『ban』لي الباند مع السبب
『kick』لي الكيك مع السبب
『clear』لي مسح الشات بعدد
『mute』لي ميوت الشات
『unmute』لي فك الميوت
『topinvite』لي رايت من جاب اعضاء اكثر 
『bc』لي ارسال برودكاست لي الجميع
『رابط』 
**       
`)
message.author.sendEmbed(embed)
}
}); 

client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});







client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تنشر",
        color: 0x06DF00,
        description: "يمنع النشر في هذا السيرفر",
        footer: {
          text: "By REX"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})




	


































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
  /*let log = client.channels.find("name", "log");
  if(!log) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
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

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});




















const ms = require("ms");
const fs = require('fs');
var user = {};
var warn = {};
client.on('message', function(message) {
    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 4) {
        message.author.delete
      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete
    }
  }
  if (warn[message.author.id] == 4) {		   
     if (!message.channel.guild) return;
             message.author.delete
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();
           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
     var msg;
        msg = parseInt();
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
      .setDescription(":white_check_mark:  | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\n  MuteChat / ميوت كتابي\n")
      .setFooter("Anti - Spam")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | تمت معاقبتك")
      .setDescription(`**:small_blue_diamond:لقد قمت بمخالفة قوانين السيرفر**\n \n:gun: : نوع العقوبه\nMuteChat / ميوت كتابي\n:clock1: وقت وتاريخ العقوبه:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
          .setFooter("Anti - Spam")
      .setColor("c91616")
     message.author.send(embed20)
  }
});


client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});


client.on('message', message => {
        let reason = message.content.split(" ").slice(2).join(" ")
        let muterole = message.guild.roles.find("name", "muted")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "mute")) {
            if(!men) return message.channel.send("**Do you want me to mute you 🤔 ?, please @mention someone. `Ex. #mute @REX bad boy`**");
            if(!reason) return message.channel.send("**Do you want me to mute " + men.username + " with no reason ?, `Ex. #mute @xRokz bad boy` or just use `none` for no reason **`")
            if(!muterole) {
                message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})
            }
            message.guild.member(men).addRole(muterole)
                message.channel.send("**" + men.username + " has been muted! 🤐**")
        }
        if(message.content.startsWith(prefix + "unmute")) {
            if(!men) return message.channel.send("**please @mention someone. `Ex. #unmute <@298732816995319809> bad boy`**");
            if(!muterole) {
                message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})
            }
            message.guild.member(men).removeRole(muterole)
                message.channel.send("**" + men.username + " has been unmuted! 😀 **")
        }
    })
            











 client.on ('guildMemberAdd', member => {
   var role = member.guild.roles.find ('name', 'members');
   member.addRole (role);
})
client.on ('guildMemberRemove', member => { 
})




client.on('message',message =>{
    if(message.content.startsWith(prefix + 'topinvite')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
  i.forEach(inv =>{
    var [invs,i]=[{},null];
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/470678787252813844/477229910486941725/PicsArt_08-02-09.08.16.jpg")
           message.channel.send({ embed: embed });
  });
    }
  });




client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'wlc');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
     .setFooter("**SERVER NAME**")
        .setTimestamp()
      channel.sendEmbed(embed);
    });

    



        





client.on('message', message => {
       if (message.content.startsWith(prefix + 'botserver')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});


client.on('guildCreate', guild => {
  client.channels.get("470698398559895572").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});







     
    




const jimp = require('jimp');   
const canvas = require("canvas");
const sWlc = {}
const premium = ['463837201092968448']
client.on('message', message => {
var prefix = "!";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
 


client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
      var Canvas = require('canvas')
      var jimp = require('jimp')
      const w = ['PicsArt_07-17-07.58.02 (1).png'];
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      })
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To SERVER ${member.guild.name}`, 245, 80);
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();
    welcomer.sendFile(canvas.toBuffer())
      })
      })
      
      }
      });


client.on('message', message => {
        if (message.content === '!inv') {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(`-#| ${message.author.username} |#-`, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond:Click Here.. !`)
        .setURL('https://discordapp.com/oauth2/authorize?client_id=463837201092968448&scope=bot&permissions=2146958591')
        .setThumbnail('https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048')
        .addField(':small_blue_diamond:Byـ:', '<@' + message.author.id + '>')        
     message.channel.sendEmbed(embed);
       }
   });

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});





   client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let log = client.channels.find("name", "log");
  if(!log) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  message.guild.member(user).ban(7, user);
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**اسم | Name**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل | By**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب | Reason**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


 
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});





client.on('message', message => {
     if(message.content.startsWith(prefix + "clear")) {
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need MANAGE_MESSAGES permission noob');
  if (!args[0]) return message.channel.send('You didn\'t provide any number!!!');
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor(0xF16104)
      .setDescription(`Cleared ${args[0]} messages.`);
    message.channel.send({ embed });
    const actionlog = message.guild.channels.find('name', 'log');
    if (!actionlog) return message.channel.send('Can\'t find action-log channel. Are you sure that this channel exists and I have permission to view it? **CANNOT POST LOG.**');
    const embedlog = new Discord.RichEmbed()
      .setDescription('~Purge~')
      .setColor(0xF16104)
      .addField('Purged By', `<@${message.author.id}> with ID ${message.author.id}`)
      .addField('Purged in', message.channel)
      .addField('Time', message.createdAt);
    actionlog.send(embedlog);
  });
};
});


const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();
client.on('message',async message => {
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;lp
fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send('**${message.author.username}, your balance is \`${userData.credits}``');
}
});
client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(⏱ | ${message.author.username}, your daily 💴 credits refreshes in ``1 Day``.);
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };
    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    message.channel.send( | ${message.author.username}, you received your 💴 ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});


























client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
