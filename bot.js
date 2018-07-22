const Discord = require('discord.js');

const bot = new Discord.Client();

const client = new Discord.Client();

const prefix = '+'

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

     client.user.setActivity("+help",{type: 'WATCHING'})

});

client.on('message', message => {

	var prefix = "+";  if (!message.content.startsWith(prefix)) return;

  const verifed = ["389090790984515594"];

if (message.content.startsWith(prefix + 'owner')) {

if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**   جا صاحب البوت هنا الكل يوقف**` + `✅`)

} else {

   message.reply('**انت لست صاحب البوت**' + '❌');   

}

}

});

client.on("message", (message) => {

    if (message.content.startsWith("+ban ")) {

      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');

        var member= message.mentions.members.first();

        member.ban().then((member) => {

            message.channel.send(member.displayName + " لقد تم طرده بنجاح 👋 ");

        }).catch(() => {

            message.channel.send("❌ هناك خطاء حاول مره أخرى❌ ");

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

        const emoji = client.emojis.find("name", "log")

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

client.login('process.env.BOT_TOKEN');
