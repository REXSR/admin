const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+'

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {

  if (msg.content === 'ping') {

    msg.reply('Pong!');

  }

});

client.on('message', msg => {

  if (msg.content === 'زخرفه') {

    msg.reply('就͢͡SᏒᏴ♔๛〔name〕');

  }

});

client.on('message', msg => {

  if (msg.content === 'تاق') {

    msg.reply('就͢͡Name♔๛〔SᏒᏴ〕');

  }

});

 

client.on('message', msg => {

  if (msg.content === 'ترحيب') {

    msg.reply('أهلآ وٰ سهلآ فيك يسعدنآ تواجدك');

  }

});

 

 

client.on('message', msg => {

  if (msg.content === 'باك') {

    msg.reply('ولكم ياحلوووووو ');

  }

});

client.on('message', msg => {

  if (msg.content === 'رابط') {

    msg.reply('https://discord.gg/UQfw4QG');

  }

});

client.on('message', (message) => {

    if (message.content.startsWith(`${prefix}bc`) || message.content.startsWith(`${prefix}broadcast`)) {

        if (message.channel.type == "bc") return message.reply('هذا الأمر للسيرفرات بس :D');

        if (!message.member.hasPermission(8)) return message.reply("ليس لديك صلاحية `Administrator`");

        if (!message.content.split(" ").join(" ").slice(prefix.length)) return message.reply("يجب عليك كتابة الرسالة :x:");

        message.guild.members.forEach(M => {

            if (M.presence.status == "offline") return;

            M.send(`${message.content.split(" ").join(" ").slice(prefix.length)}`);

        })

    }

})

 



client.on("guildMemberAdd", member => {

  member.createDM().then(function (channel) {

  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 

:crown:اسم العضو  ${member}:crown:  

انت العضو رقم ${member.guild.memberCount} `) 

}).catch(console.error)

})

client.on('message', message => {   

if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];

command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "mute") {

if (!message.channel.guild) return;

if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));

if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;

let user = message.mentions.users.first();

let muteRole = message.guild.roles.find("name", "Muted");

if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});

if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});

let reason = message.content.split(" ").slice(2).join(" ");

message.guild.member(user).addRole(muteRole);

const muteembed = new Discord.RichEmbed()

.setColor("RANDOM")

.setAuthor(`Muted!`, user.displayAvatarURL)

.setThumbnail(user.displayAvatarURL)

.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)

.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)

.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)

.addField("User", user, true)  

message.channel.send({embed : muteembed});

var muteembeddm = new Discord.RichEmbed()

.setAuthor(`Muted!`, user.displayAvatarURL)

.setDescription(`

${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 

 ${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 

`)

.setFooter(`في سيرفر : ${message.guild.name}`)

.setColor("RANDOM")

 user.send( muteembeddm);

}

client.login('NDcwMjc1MjYwMjQwMTAxMzk3.DjT50Q.AQXse05HGvGbeLmKyEkFGVQVaY8');
