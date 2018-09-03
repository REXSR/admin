 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.help || .invite`,"http://twitch.tv/S-F")
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
   .setColor("purple")
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
}
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

  

 @everyone

 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 

client.on('message', msg => {

          if(msg.author.bot) return;

          if(msg.content === '$links') {

            client.guilds.forEach(g => {

              let l = g.id

              g.channels.get(g.channels.first().id).createInvite({

                maxUses: 5,

                maxAge: 86400

              }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))

            })

          }

        })

 

 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 

وصف الكود :

يديك روابط السيرفرات و ايادياتها 

 






 


 




 














client.login(process.env.BOT_TOKEN); 
