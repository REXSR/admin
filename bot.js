 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Great.`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


 



  

  client.on('message', async message => {

  let messageArray = message.content.split(' ');

  let args = messageArray.slice(1);

  if(message.content.startsWith(prefix + "invites")) {

    if(!args) return message.reply('**حدد اسم دعوة**');

    message.guild.fetchInvites().then(i => {

      let inv = i.get(args[0]);

      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);

      var iNv = new Discord.RichEmbed()

      .setAuthor(message.author.username,message.author.avatarURL)

      .setThumbnail(message.author.avatarURL)

      .addField('# - صاحب الدعوة',inv.inviter,true)

      .addField('# - روم الدعوة',inv.channel,true)

      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)

      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)

      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)

      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)

      message.channel.send(iNv);

    });

  }

});

   



client.on('message', msg => {

          if(msg.author.bot) return;

          if(msg.content === 'links') {

            client.guilds.forEach(g => {

              let l = g.id

              g.channels.get(g.channels.first().id).createInvite({

                maxUses: 5,

                maxAge: 86400

              }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))

            })

          }

        })

 

client.on('message', message => {

    if (!message.guild) return; 

    if (message.content.startsWith("الرابط")) {

        message.channel.createInvite({

        thing: true,

        maxUses: 1,

        maxAge: 86400

    }).then(invite =>

      message.author.sendMessage(invite.url)

    )

  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)

      message.author.send(`**هذا الرابط لشخص واحد و لمدة 24 ساعة **`)

    }

});

 
client.on('message', message => {
          

           if (message.content.startsWith(prefix + "id")) {
           if (message.channel.id !== "326101086467522570") return;
            
            if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
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
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
    message.channel.sendEmbed(id);
})
}
    

         
     });
 






client.on('message',message =>{
    if(message.content.startsWith(prefix + 'top')) {
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
  .setThumbnail("https://cdn.discordapp.com/avatars/445991106631434241/eb4bdfbbc0db457d32bb1899f1f08a10.jpg?size=128")
           message.channel.send({ embed: embed });
  });

   

    }

  });

  
  client.on('message', message => {
           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);
                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
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
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  
 
 client.on('message', message => { //jackeo جاكيو
    if (message.content.startsWith("تهكير")) {
  if(!message.channel.guild) return message.reply(' ');//jackeo جاكيو
      if (message.author.bot) return//jackeo جاكيو
           message.delete();//jackeo جاكيو
             let args = message.content.split(' ').slice(1);//jackeo جاكيو
                   let virusname = args.join(' ');//jackeo جاكيو
                 if (virusname < 1) {//jackeo جاكيو//jackeo جاكيو
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");//jackeo جاكيو
                                     }//jackeo جاكيو
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [▓] 1%**`).setColor(0xFF0000)})
             }, 5500)//jackeo جاكيو
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓] 25%**`).setColor(0xFF0000)})
              }, 10500)//jackeo جاكيو
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓] 50%**`).setColor(0xFF0000)})
               }, 15500)//jackeo جاكيو
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**`).setColor(0xFF0000)})
                }, 25500)//jackeo جاكيو
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**`).setColor(0xFF0000)})
             }, 30500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم الدخول للحساب** `).setColor(0xFF0000)})
             }, 40500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم حفض بينات الحساب** `).setColor(0xFF0000)})
             }, 45500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم رفع البينات** `).setColor(0xFF0000)})
             }, 50500)//jackeo جاكيو
              setTimeout(function() {
               m.delete()//jackeo جاكيو
           }, 55000)//jackeo جاكيو
             setTimeout(function() {
               message.channel.send('** تم الاختراق  __Done Hacking__ **').then(msg => msg.delete(25000));
           }, 60500)//jackeo جاكيو
           });//jackeo جاكيو
         }//jackeo جاكيو
 });//jackeo جاكيو
  
     
    
const fs = require("fs");
  client.on('message', async message =>{
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      let xp = require("./xp.json");
  
    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log(xpAdd);
  
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
  
  
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp =  curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
      xp[message.author.id].level = curlvl + 1;
      let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setColor("blue")
      .addField("New Level", curlvl + 1);
  
      message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
    });
  });

  client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '.';
    let xp = require("./xp.json");
    
if(cmd === `${prefix}level`) {
if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
   };
 }
   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvlXp = curlvl * 300;
   let difference = nxtLvlXp - curxp;
 
   let lvlEmbed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setColor("blue")
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
}
});
         

  
 
const discord = new Discord.Client({ fetchAllMembers: true });
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
var Canvas = require('canvas')
var jimp = require('jimp')
var shortNumber = require('short-number');
const moment = require('moment');
const pretty = require('pretty-ms');
const rn = require('random-number');
let done = {};





client.on('ready', () => {
  console.log(`✨ Name: ${client.user.username}`)
  console.log(`✨ Id: ${client.user.id}`)
  console.log(`✨ Prefix: ${prefix}`)
  console.log(`✨ Servers: ${client.guilds.size}`)
  console.log(`✨ Members: ${client.users.size}`)
  console.log(`✨ Channels: ${client.channels.size}`)
})  






const games = JSON.parse(fs.readFileSync('./Storage/games.json', "utf8"));
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (!games[message.author.id]) games[message.author.id] = {
    credits: 100,
    level: 1,
  };
fs.writeFile('./Storage/games.json', JSON.stringify(games), (err) => {
if (err) console.error(err);
});
});





var prefix = "."

let dataPro = JSON.parse(fs.readFileSync('./Storage/walls.json', 'utf8'));
client.on("message", message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
if(!dataPro[message.author.id]) {
            dataPro[message.author.id] = {
                ai: false,
                wallSrc: './walls/p2.png' ,
                walls: {}
            };
        }
fs.writeFile('./Storage/walls.json', JSON.stringify(dataPro), (err) => {
if (err) console.error(err);
});
});
//خلفية
client.on("message",  message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
let args = message.content.split(' ').slice(1);
if (message.content.startsWith("خلفيه")) {
        if(!args[0]) return message.reply('يجب عليك اختيار رقم الخلفيه')
        if(dataPro[message.author.id].walls[args[0]]) {
        dataPro[message.author.id].ai = true;
        dataPro[message.author.id].wallSrc = dataPro[message.author.id].walls[args[0]].src;
        message.channel.send(`**${message.author.username}**|  تم تغير الخلفية بنجاح`);
        } else {
        message.channel.send(`**${message.author.username}**|  انت لا تملك هذه الخلفية`);
        }
        }
});    
//خلفياتي
client.on("message",  message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
if(message.content.startsWith('خلفياتي')) {
var walls = dataPro[message.author.id].walls;
for(var wall in walls) {
console.log(walls[wall]);
message.channel.send(walls[wall]);// ;(
}
}
});
//سعر الخلفيات
var wallpapers = {
                1: {
                    src: 'walls/p3.png',
                    price: 0,
                },
                2: {
                    src: 'walls/p4.png',
                    price: 1000,
                },
                3: {
                    src: 'walls/p7.png',
                    price: 2300,
                },
                4: {
                    src: 'walls/p12.png',
                    price: 3000,
                },
                5: {
                    src: 'walls/p5.png',
                    price: 4000,
                },
             6: {
                    src: 'walls/p6.png',
                    price: 5500,
                },
             7: {
                    src: 'walls/p7.png',
                    price: 8000,
                },
                 8: {
                    src: 'walls/le3moree.jpg',
                    price: 9000,
                },  
            }
//خلفيات
client.on("message",  message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
if (message.content===("خلفيات")) {
let embed = new Discord.RichEmbed()
.setDescription(`**لشراء الخلفية استخدم امر $شراء و رقم الخلفية , لوضع الخلفية استخدم امر $خلفية**`)
.addField('Profile live','سعرها : $0 رقم: 1')
.addField('Profile snow','سعرها: $1000 رقم: 2')
.addField('Profile girl','سعرها : $2300 رقم: 3')
.addField('Profile naruto','سعرها: $3000 رقم: 4')
.addField('Profile anonymous','سعرها: $4000 رقم: 5')
.addField('Profile fortnite','سعرها: $5500 رقم: 6')
.addField('Profile overwatch','سعرها: $8000 رقم: 7')
.addField('Profile monster','سعرها: $9000 رقم: 8')
.setImage("https://cdn.discordapp.com/attachments/444184423056015370/445203129470812171/wWu5HdBj.jpg");
message.channel.send({embed: embed});
}
});
//شراء
client.on("message",  message => {
var sender = message.author;
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
let args = message.content.split(' ').slice(1);
if (message.content.startsWith("buy")) {

if (!games[sender.id].credits){
message.channel.send(`**${sender.username}**| انت لا تملك دراهم بتاتا`)
return;
}

if(!args[0]) {
 message.channel.send(`** لشراء الخلفية استخدم امر $شراء و رقم الخلفية , لوضع الخلفية استخدم امر $خلفلية ورقم الخلفية**`);
} else
if(dataPro[message.author.id].walls == wallpapers[args[0]]){
message.reply('انت تملك هذه الخلفيه مسبقاً')
}else
if(wallpapers[args[0]].price > games[sender.id].credits) {
message.channel.send(`**${sender.username}**| انت لا تملك المال الكافي لشراء هذه الخلفية`)
}else
if(wallpapers[args[0]].price < games[sender.id].credits) {
                     games[sender.id].credits = games[sender.id].credits - wallpapers[args[0]].price;
                     dataPro[message.author.id].ai = true;
                     dataPro[message.author.id].walls[args[0]] = wallpapers[args[0]];
                     message.channel.send(`**${message.author.username}**|  تم شراء الخلفية بنجاح استخدم امرخلفية ${args[0]}لاستخدامها`)
}
}
});
////////////////////بروفايل////////////////////////////
const profile = JSON.parse(fs.readFileSync('./Storage/profile.json', "utf8"));

client.on("message", message => {
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    info: '$info To Set The Info',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
  };
fs.writeFile('./Storage/profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
//لايك//
/*client.on('message', message => {
  if (message.author.bot) return;
    var sender = message.author
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
    if(message.content.startsWith(prefix + 'لايك')) {
    let ment = message.mentions.users.first()  
if (games[sender.id].lastDaily != moment().format('day')) {
    games[sender.id].lastDaily = moment().format('day')
        if(!ment) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
        if(ment = message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    profile[ment.id].rep += 1; 
    message.channel.send(`** :up:  |  ${message.author.username} has given ${ment} a reputation point!**`)
    }else {
    message.channel.send(`**:stopwatch: |  ${message.author.username}, you can award more reputation  ${moment().endOf('day').fromNow()} **`)

    }

	
    }
    });*/
client.on('message', message => { 

    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first() 
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep += 1; // يضيف واحد كل مره يستخدم الامر
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
});
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
    if(message.content.startsWith(prefix+ 'rep')) {
    let ment = message.mentions.users.first()  
    if(!ment) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
    if(profile[message.author.id].reps != (new Date).getTime());{
    profile[message.author.id].reps =  profile[message.author.id].reps = (new Date).getTime();
    profile[ment.id].rep += 1; 
    message.channel.send(`** :up:  |  ${message.author.username} has given ${ment} a reputation point!**`).then(()=> profile[message.author.id].lastDaily = (new Date).getTime());
    }
    	if(profile[message.author.id].reps && (new Date).getTime() - message.mentions.users.first() < 60*1000*60*24) {
        let r = (new Date).getTime() - profile[message.author.id].reps;
          r = 60*1000*60*24 - r;
        return message.channel.send(`:stopwatch: |  ${message.author.username}, you can award more reputation in ${pretty(r, {verbose:true})}`);
	}
    }
    }); 

//هدية//
client.on("message", (message) => {
  var sender = message.author
if(message.content.startsWith(prefix + 'daily')) {
if (games[sender.id].lastDaily != moment().format('day')) {
    games[sender.id].lastDaily = moment().format('day')
 games[message.author.id].credits += 200;
    message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
})
//مصاري//
client.on("message", (message) => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
if (message.content === 'credits') {
message.channel.send(`** ${message.author.username}, your :credit_card: balance is ${games[message.author.id].credits}.**`)
}
});
//تحويل//

client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
//Hey Fadi How Are You ?
if(message.content.startsWith('تحويل')) {
let men = message.mentions.users.first()
let money = message.content.split(" ").slice(2).join('');
var sender = message.author;
if (!men) return message.channel.send(`**${sender.username}**| منشن شخص`);
if (!money) {
message.channel.send(`**${sender.username}**|يرجى وضع المبلغ  `)
return;
}
if (!isNaN(money)) {
message.channel.send(`**${message.author.username}**| يرجى وضع رقم صحيح `);
return; 
}
if  (!games[men.id]) games[men.id] = {}
if (!games[sender.id].credits){
message.channel.send(`**${sender.username}**| انت لا تملك دراهم كافية للتحويل`);
return;
}
if(money > games[sender.id].credits) {
message.channel.send(`**${sender.username}**|دراهمك غير كافية `)
}else {
if (!games[men.id].credits) games[men.id].credits = 100;
games[men.id].credits += (+money);  
games[sender.id].credits += (-money);

message.channel.send(`:money_with_wings: **_عملية تحويل_**:money_with_wings: 
المحول:** ${sender.username}:outbox_tray:**
المستلم:**${men.username}:inbox_tray: **
المبلغ:**${money}** :moneybag:`)
}
}
});
//عطية
client.on("message", (message) => {     
if(message.content.startsWith(prefix + 'give')) {
if(message.author.id !=347838851605331968)return;
let men = message.mentions.users.first();
if  (!games[men.id]) games[men.id] = {}
if (!games[men.id].credits) games[men.id].credits = 100;
games[men.id].credits += 1000
}
});
//معلوماتي
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
        if(message.content.startsWith('info')) {
        let args = message.content.split(' ').slice(1).join(' ')
        if(!args) return message.channel.send(`**${message.author.username}, يرجى كتابة المعلومات**`)
        if(args.length > 25) return message.channel.send(`**${message.author.username} يجب ان لا تكون المعلومات اكثر من 25 حرف**`)
        profile[message.author.id].info = args
        message.channel.send(`**${message.author.username}**| تم تغير معلوماتك الى  $${args}>`)
    }
});
//لفل
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
var sender = message.author;
const games =profile;
games[sender.id].points += 1;
if (!profile[sender.id].points) profile[sender.id].points= 0 ;
if (!profile[sender.id].level) profile[sender.id].level= 0 ;
if (profile[sender.id].points == 50) profile[sender.id].level = 1 ;

if (profile[sender.id].points == 120) profile[sender.id].level = 2;

if (profile[sender.id].points == 260) profile[sender.id].level = 3;

if (profile[sender.id].points == 400) profile[sender.id].level = 4;

if (profile[sender.id].points == 560) profile[sender.id].level = 5;

if (profile[sender.id].points == 780) profile[sender.id].level = 6;

if (profile[sender.id].points == 900) profile[sender.id].level = 7;

if (profile[sender.id].points == 1100) profile[sender.id].level = 8;

if (profile[sender.id].points == 1350) profile[sender.id].level = 9;

if (profile[sender.id].points == 1700) profile[sender.id].level = 10;

if (profile[sender.id].points == 2100) profile[sender.id].level = 11;

if (profile[sender.id].points == 2300) profile[sender.id].level = 12;

if (profile[sender.id].points == 2500) profile[sender.id].level = 13;

if (profile[sender.id].points == 2800) profile[sender.id].level = 14;

if (profile[sender.id].points == 3200) profile[sender.id].level = 15;

if (profile[sender.id].points == 3600) profile[sender.id].level = 16;

if (profile[sender.id].points == 4000) profile[sender.id].level = 17;

if (profile[sender.id].points == 4500) profile[sender.id].level = 18;

if (profile[sender.id].points == 5000) profile[sender.id].level = 19;

if (profile[sender.id].points == 5700) profile[sender.id].level = 20;

if (profile[sender.id].points == 6200) profile[sender.id].level = 21;

if (profile[sender.id].points == 6800) profile[sender.id].level = 22;

if (profile[sender.id].points == 7500) profile[sender.id].level = 23;

if (profile[sender.id].points == 8500) profile[sender.id].level = 24;

if (profile[sender.id].points == 9600) profile[sender.id].level = 25;

if (profile[sender.id].points == 11000) profile[sender.id].level = 26;

if (profile[sender.id].points == 12500) profile[sender.id].level = 27;

if (profile[sender.id].points == 14000) profile[sender.id].level = 28;

if (profile[sender.id].points == 16000) profile[sender.id].level = 29;

if (profile[sender.id].points == 18500) profile[sender.id].level = 30;

if (profile[sender.id].points == 20000) profile[sender.id].level = 31;

if (profile[sender.id].points == 22000) profile[sender.id].level = 32;

if (profile[sender.id].points == 24500) profile[sender.id].level = 33;

if (profile[sender.id].points == 27000) profile[sender.id].level = 34;

if (profile[sender.id].points == 30000) profile[sender.id].level = 35;

if (profile[sender.id].points == 33000) profile[sender.id].level = 36;

if (profile[sender.id].points == 36000) profile[sender.id].level = 37;

if (profile[sender.id].points == 40000) profile[sender.id].level = 38;

if (profile[sender.id].points == 45000) profile[sender.id].level = 39;

if (profile[sender.id].points == 50000) profile[sender.id].level = 40;

if (profile[sender.id].points == 56000) profile[sender.id].level = 41;

if (profile[sender.id].points == 61000) profile[sender.id].level = 42;

if (profile[sender.id].points == 68000) profile[sender.id].level = 43;

if (profile[sender.id].points == 75000) profile[sender.id].level = 44;

if (profile[sender.id].points == 83000) profile[sender.id].level = 45;

if (profile[sender.id].points == 90000) profile[sender.id].level = 46;

if (profile[sender.id].points == 95000) profile[sender.id].level = 47;

if (profile[sender.id].points == 100000) profile[sender.id].level = 48;

if (profile[sender.id].points == 106000) profile[sender.id].level = 49;

if (profile[sender.id].points == 111000) profile[sender.id].level = 50;

});
//**بروفايل**//  
client.on("message", message => {
  if (message.author.bot) return;
	if(!message.channel.guild) return;       
if (message.content.startsWith("profile")) {
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
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }//var ghost = tf 3lek xD
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
          
      }
  const w = ['./walls/p1.png'];
if (!games[getvalueof.id]) games[getvalueof.id] = {wins: 0,loses: 0,points: 0,total: 0,credits: 100,level: 1,};          
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');       
      fs.readFile(`${dataPro[getvalueof.id].wallSrc}`, function (err, Background) {
          fs.readFile(`${w[0]}`, function (err, Background) {
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 297, 305);
});
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 300, 305);
});



                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        

                        //Avatar
                       let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                     ctx.drawImage(ava, 8, 43, 80, 85); // احداثيات صورتك
                        
                        //ur name
                        ctx.font = 'bold 16px Arial'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 130, 125) // احداثيات اسمك          

                         //bord
                        ctx.font = "regular 12px Cairo" // نوع الخط وحجمه
                        ctx.fontSize = '50px'; // عرض الخط
                        ctx.fillStyle = "#f0ff00" // لون الخط    
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`Soon...`, 170, 198) // احداثيات ترتيبك
                        
                        //credit
                        ctx.font = "bold 10px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = '#FFFFFF' // لون الخط  
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`$ ${games[getvalueof.id].credits}`, 156, 163) // احداثيات المصاري                        
                        
                        //poits
                        ctx.font = "bold 13px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#FFFFFF" // لون الخط 
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 173, 182) // احداثيات النقاط

                        //Level
                        ctx.font = "bold 27px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '50px'; // عرض الخط
                        ctx.fillStyle = "#FFFFFF" // لون الخط
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 30, 200) // احداثيات اللفل
                       
                        //info
                        ctx.font = "blod 13px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#FFFFFF" // لون الخط 
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].info}`, 118, 40) // احداثيات النقاط

                        // REP
                        ctx.font = "bold 27px Arial";
                        ctx.fontSize = "100px";
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "left";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 18,270)
                      
message.channel.sendFile(canvas.toBuffer())
})
})
}

});






 




 






 


 




 














client.login(process.env.BOT_TOKEN); 
