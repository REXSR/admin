const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
 console.log('Logged in as ${client.user.tag}!');
client.user.setActivity('By:REX SRB BEDT YOO',{ type: 'WATCHING'}) 
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

  

 




 





client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
