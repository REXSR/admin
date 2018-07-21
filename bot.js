const Discord = require('discord.js');
const client = new Discord.Client();
	var prefix = "+";
client.on('ready', () => {

  console.log('╔[════════════════════════════════════]╗');

  console.log('')

  console.log('            ╔[════════════]╗')

  console.log('              Bot Is Online')

  console.log('            ╚[════════════]╝')

  console.log('')

  console.log(`Logged in as ${client.user.tag}!`);

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log('')

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log('')

  console.log('╚[════════════════════════════════════]╝')

});

client.on('ready', () => {

     client.user.setActivity("By:REX ",{type: 'Streming'})

});



var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "SYSTEM SRB BOT")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'wlc');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "wlc")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` ♥ **تم دعوته من قبل ${Invite.inviter} ♥ `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});















client.on("message", message => {

  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "+unmute") {

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);

  let user = message.mentions.users.first();

  let modlog = client.channels.find('name', 'mod-log');

  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');

  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت'Muted' **").catch(console.error);

  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

  const embed = new Discord.RichEmbed()

    .setColor(0x00AE86)

    .setTimestamp()

    .addField('الأستعمال:', 'اسكت/احكي')

    .addField('تم فك الميوت عن:', `${user.username}!${user.discriminator} (${user.id})`)

    .addField('بواسطة:', `${message.author.username}!${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {

return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);

} else {

    message.guild.member(user).removeRole(muteRole).then(() => {

return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);

});

  }

};


});
client.on('message', msg => {

  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) return;

  let command = msg.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);

    if(command === "+clear") {

        const emoji = client.emojis.find("name", "wastebasket")

    let textxt = args.slice(0).join("");

    if(msg.member.hasPermission("MANAGE_MESSAGES")) {

    if (textxt == "") {

        msg.delete().then

    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));

} else {

    msg.delete().then

    msg.delete().then

    msg.channel.bulkDelete(textxt);

        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));

        }    

    }

}
});
 

         const table = require('table')

const arraySort = require('array-sort');

         var x5bz = "+"

         

client.on('message' , async (message) => {

    if(message.content.startsWith(x5bz + "inv")) {

           if(!message.channel.guild) return

  var invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User Invited', 'Uses']];

    invites.forEach(i => {

      possibleInvites.push([i.inviter.username , i.uses]); 

    })

    const embed = new Discord.RichEmbed()

    .setColor('RANDOM')

    .setTitle("Server Invites")

    .addField('Top Invites:' , `\`\`\`${table.table(possibleInvites)}\`\`\``)

    .setThumbnail(message.author.avatarURL)

    message.channel.send(embed)

    }

});

var moment = require("moment");

client.on('message', message => {

  var prefix = '+';

  

  if (message.content.startsWith(prefix + "id")) {

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

    .setColor("!0a0909")

    .setAuthor(message.author.username, message.author.avatarURL) 

.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 

.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)

.addField(': عدد الدعوات', inviteCount,false)

.setFooter("-")  

    message.channel.sendEmbed(id);

})

}       

});

 

client.on('message', message => {

if (message.content.startsWith("ban")) {

    var mention = message.mentions.members.first();

    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);

    

    message.channel.send("تم أعطاء باند الى : " + mention.tag);

};

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

  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");

  if(!reason) return message.reply ("**اكتب سبب الطرد**");

  if (!message.guild.member(user)

  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()

  .setAuthor(`Kicked!`, user.displayAvatarURL)

  .setColor("RANDOM")

  .setTimestamp()

  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')

  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')

  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')

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

  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)

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

              if(!message.channel.guild) return;

 

    if(message.content.startsWith('bc')) {

    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

    let copy = "SYSTEM BOT";

    let request = `Requested By ${message.author.username}`;

    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {

    msg.react('✅')

    .then(() => msg.react('❌'))

    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

 let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

    reaction1.on("collect", r => {

    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));

    message.guild.members.forEach(m => {

    var bc = new

       Discord.RichEmbed()

       .setColor('RANDOM')

       .setTitle('Broadcast')

       .addField('Server', message.guild.name)

       .addField('Sender', message.author.username)

       .addField('Message', args)

       .setThumbnail(message.author.avatarURL)

       .setFooter(copy, client.user.avatarURL);

    m.send({ embed: bc })

    msg.delete();

    })

    })

    reaction2.on("collect", r => {

    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

    msg.delete();

    })

    })

    }

    });

client.on('message', function(msg) {

    if(msg.content.startsWith (prefix  + 'server')) {

      let embed = new Discord.RichEmbed()

      .setColor('RANDOM')

      .setThumbnail(msg.guild.iconURL)

      .setTitle(`Showing Details Of  **${msg.guild.name}*`)

      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)

      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)

      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)

      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)

      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)

      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)

      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)

      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)

      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())

      msg.channel.send({embed:embed});

    }

  });

client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا

client.on('message', message => {

    if(message.content === "f!bot") {

        const embed = new Discord.RichEmbed()

        .setColor("#00FFFF")

        .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
**Users**👥 **__${client.users.size}__**
**Channels**📚 **__${client.channels.size}__** `)

               message.channel.sendEmbed(embed);

           }

	  });

client.on('message', msg =>{
    let message=msg;
    if(message.content.startsWith("bc")){
        var args = message.content.split(' ').slice(1).join(' ');
    msg.guild.members.forEach(m=>{
        m.send(args.replace(/[user]/g,m)).catch();
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
    }
    })    ;
    }
});







	 client.login("NDYzODM3MjAxMDkyOTY4NDQ4.DjP6RA.wn9tK-JRSOCc_Ca9pY923mvA4MY");  //اياكككك تلعب هنا لا تحط توكنك هنا
