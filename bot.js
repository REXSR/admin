const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
 console.log('Logged in as ${client.user.tag}!');
client.user.setActivity('By:REX SRB BEST YOO',{ type: 'WATCHING'}) 
});






  

  client.on('message',async message => {
if(message.content === 'unbanall') {
message.guild.fetchBans().then(ba => {
ba.forEach(ns => {
message.guild.unban(ns)
});
});
}
});

  
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
    if(command === "clear") {
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
 






client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bcservers')){
 if (message.author.id !== '283355378811666435') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
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
if (message.content.startsWith("ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});

 




                



        

    







client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
