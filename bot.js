const Discord = require('discord.js');
const Util = require('discord.js');
const queue = new Map();
const ytdl = require('ytdl-core');
const fs = require('fs');
const prefix = "$";

/////////////////////////////////////////////
/////////////////////////////////////////////

client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('$quran')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**من فضلك ادخل روم صوتي**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=14JEJ0Cqq_M', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('$stop')) {
              if(!message.channel.guild) return message.reply('** هذا الامر فقط للسيرفرات **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`**من فضلك ادخل روم صوتي**`);
    }
voiceChannel.leave();
  }

});

    const adminprefix = "$";
const devs = ['380307890235506698','ID OWNER OF BOT'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
}); 

client.login(process.env.BOT_TOKEN);
