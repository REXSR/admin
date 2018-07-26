const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => { 
 console.log('Logged in as ${client.user.tag}!');
client.user.setActivity('',{ type: 'WATCHING'}) 
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
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription('
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
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



  

  client.on('message',async message => {

if(message.content === 'unbanall') {

message.guild.fetchBans().then(ba => {

ba.forEach(ns => {

message.guild.unban(ns);

});

});

}

});

  

 




 





client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
