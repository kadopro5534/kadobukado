const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);



const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 Başarıyla Aktif");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});





client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};





client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);



client.on('guildMemberAdd', member => {
  let guild = member.guild;
  const channel = member.guild.channels.find('name', 'register');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RED')
        .setAuthor(`💎 Vons 💎`)
         .addField(`Vons'un Sunucusuna `,`**Hoşgeldin** ${member} **Seninle \`${member.guild.memberCount}\` Kişiyiz**`)
         .addField(`Kayıt Olmak İçin`,`**Ses Teyit Gelebilirsin**`)
         .setImage(`https://media.giphy.com/media/OkJat1YNdoD3W/source.gif`)
  channel.sendEmbed(embed); 
});


//---------------------------------Bot Koruma---------------------------------\\

client.on("guildMemberAdd", async member => {
  
  
    if(member.user.bot) {
     
      member.guild.roles.forEach(async function(yetkilirol){
  if(yetkilirol.id ==="303511917022937088","397337376856342529","366706008308973568")return
  if(yetkilirol.hasPermission("ADMINISTRATOR")){
       yetkilirol.setPermissions((yetkilirol.permissions-8))    
     }
      })
      let korumakanalı = client.channels.get("706146405126897704")  
                                                             
      if(!korumakanalı || korumakanalı === null){
        member.ban(member);
         member.guild.owner.send(`botkoruma-odası olmadığı içim sunucu sahibinin DM'sine yazıyorum.| **Sunucuya bir bot eklendi ve koruma nedeniyle botu banladım. \nBanlanan Bot: **${member}  `)
     }
      else{
        
      member.ban(member);
      korumakanalı.send(`**Sunucuya Bir Bot eklendi Ve Vons Koruma Nedeniyle Botu Banladım. \nBanlanan Bot: **${member}`)
     }
  }
    else{
    
    }
  
  }) 








//---------------------------------Sa As---------------------------------\\

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'Sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sA') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'SA') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });


//---------------------------------Bot Dm---------------------------------\\

client.on("message", msg => {
var dm = client.channels.get("707945651148947456")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.RichEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL}`)
.addField("Vons OFFİCİAL Gönderen", msg.author.tag)
.addField("Vons OFFİCİAL Gönderen ID", msg.author.id)
.addField("Vons OFFİCİAL Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
}); 


//---------------------------------SaAs ---------------------------------\\

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!link') {
    msg.channel.send('https://discord.com/invite/vons');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('  Aleyküm selam,  Hoş geldin <a:HyperHeart:618416199981727785> ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SA') {
    msg.channel.send('  Aleyküm selam,  Hoş geldin <a:HyperHeart:618416199981727785> ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamün aleykum') {
    msg.channel.send('  Aleyküm selam,  Hoş geldin <a:HyperHeart:618416199981727785> ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sA') {
    msg.channel.send('  Aleyküm selam,  Hoş geldin <a:HyperHeart:618416199981727785> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Sa') {
    msg.channel.send('  Aleyküm selam,  Hoş geldin <a:HyperHeart:618416199981727785> ');
  }
});


//---------------------------------bazı komutlar---------------------------------\\

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!youtube') {
    msg.channel.send(' https://www.youtube.com/channel/UCY8ECwP7UILD6wBUz-WJdWw  <a:HyperHeart:618416199981727785> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!dlive') {
    msg.channel.send('https://dlive.tv/VonsOfficial  <a:HyperHeart:618416199981727785> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!ins') {
    msg.channel.send('https://www.instagram.com/vonsofficial/  <a:HyperHeart:618416199981727785> ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '!twitch') {
    msg.channel.send('https://www.twitch.tv/VonsOfficial/  <a:HyperHeart:618416199981727785> ');
  }
});

//---------------------------------Buyuk Harf---------------------------------\\
    client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı Vons Guard tarafından engellenmekte!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});

//---------------------------------Buyuk Harf---------------------------------\\




//---------------------------------Reklam Koruması---------------------------------\\

client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`) 
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                   
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('**Vons Guard** Reklam engellendi.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("*Vons Guard**Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)                       
                    return msg.channel.send(`${msg.author.tag}, **Reklam Yapmak Yasak!**`).then(msg => msg.delete(25000));
                  }             
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
  });


//---------------------------------Reklam Koruması---------------------------------\\

client.on("guildMemberAdd", message => {
  client.channels
    .get("722428752436396052")
    .setName(`🔵 Kişi Sayısı: ${message.guild.memberCount} 📤`);
  // kanal id yazan yerlere sesli kanalın id'sini sağtıklayıp kopyalayın ve yapıştırın
});
//Sunucudan Çıktığın Kişi Sayını Azaltma
client.on("guildMemberRemove", message => {
  client.channels
    .get("722428752436396052")
    .setName(`🔴 Kişi Sayısı: ${message.guild.memberCount} 📥`);
});


setInterval(() => {
  client.channels.get("721479950057734215").send('** Kayıt İçin İsim Yaş Yazmanız Gerekmektedir**')
}, 3600000)