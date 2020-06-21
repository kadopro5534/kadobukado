const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '720713673412444280' 
let kado = '555023240704294913'
let kado1 = '555023371751129099' 

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Kadirin Ayarladıgı Yetkiye Sahip Değilsin`);
  let member = message.mentions.members.first()
  let uyarilacak = message.mentions.users.first();
  let sebep = args[1]
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')

  setTimeout(function(){
  member.addRole(kado)
  },1000)  
  
  setTimeout(function(){
  return uyarilacak.send(`Vons'dan Uyarı 1 Aldınız . \`**${sebep}**\` sebebiyle uyarıldın. Yetkili: ${message.author.username}`);
  },2000)
  

 const emoji = client.emojis.find(emoji => emoji.name === "");
 let embed = new Discord.RichEmbed()
  .setColor('red')
  .setAuthor(`Vons Uyarı Sistemi`)//Vons Uyarı Sistemi
  .setTitle(`Uyarı 1 Verildi ...`)
  .setTitle(`Sebeb: ${sebep} `)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  .setThumbnail("https://cdn.discordapp.com/attachments/706103816822456342/708070793745006652/a_d9f4d7bf26535497f05cfeab3b379a70.gif")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı1','uyarı1'],
  permLevel: 0
}
exports.help = {
  name: 'uyarı1',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '.uyarı1 <yeni nick>'
}