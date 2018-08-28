const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'r';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong هلا');
  }
});



















































client.on('guildMemberAdd',async member => {
  const Canvas = require('canvas');
  const jimp = require('jimp');
  const w = ['./welcome_4.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(800, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();

 

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

            if (err) return console.log(err);

            let BG = Canvas.Image;

            let ground = new Image;

            ground.src = Background;

            ctx.drawImage(ground, 0, 0, 800, 300);

 

})

 

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;

                jimp.read(url, (err, ava) => {

                    if (err) return console.log(err);

                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                 if (err) return console.log(err);

 

          ctx.font = '36px Arial';

          ctx.fontSize = '72px';

          ctx.fillStyle = "#ffffff";

          ctx.textAlign = "center";

          ctx.fillText(member.user.username, 545, 177);

         

          ctx.font = '16px Arial Bold';

          ctx.fontSize = '72px';

          ctx.fillStyle = "#ffffff";

          ctx.textAlign = "center";

          ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);

         

          let Avatar = Canvas.Image;

          let ava = new Avatar;

          ava.src = buf;

          ctx.beginPath();

          ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);

          ctx.closePath();

          ctx.clip();

          ctx.drawImage(ava, 36, 21, 260, 260);

           

          const c = hero.channels.get("481119091214778369");

          c.sendFile(canvas.toBuffer());

 

});

});

});












































client.login(process.env.BOT_TOKEN);
