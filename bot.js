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
 

let autorole = JSON.parse(fs.readFileSync("./autoRole.json", "utf8"));
var defaultmodrole = '❦ᎷᎬᎷᏴᎬᎡ❦';
var autoRole;
if(autorole[message.guild.id]){
var autoRole = autorole[message.guild.id].autoRole;
}else{

var autoRole = 'membres';

}
if(message.content.startsWith(prefix + "setautorole")){
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){return message.reply("x Vous n'avez pas les permissions dans ce serveur").catch(console.error);                                                                    
                                                                        
}else{

let args = message.content.split(' ').slice(1);
if(!args) return message.channel.send('x Merci de specifier un rôle')
autorole[message.guild.id] = {"autoRole": args.join(" ")};
message.channel.send("Mon autoRole est "+ args.join(" ") + "");
fs.writeFile("./autoRole.json", JSON.stringify(autorole), (err) => {if (err) console.error(err);});

}

}


 





client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا
