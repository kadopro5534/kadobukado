const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '720713673412444280' 
let kado = '720721426931384451' 

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Kadirin Ayarladıgı Yetkiye Sahip Değilsin`);
  let member = message.mentions.members.first()
  let uyarilacak = message.mentions.users.first();
  let sebep = args[1]
  if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Kanka Yetkili O Banlıyamam UIDGIUDGUIDGUI`)
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')

  setTimeout(function(){
  member.addRole(kado)
  },100)

  setTimeout(function(){
  member.ban(` Uyarı 3 Komudu İle Ban Yemiştir | Yetkili: ${message.author.tag} - ${message.author.id}`)
  },1000)
 
  setTimeout(function(){
  return uyarilacak.send(`Vons'dan Uyarı 3 Aldınız . Uyarı 3 **Ban** \`**${sebep}**\` sebebiyle uyarıldın. Yetkili: ${message.author.username}`);
  },2000)
  
  
 const emoji = client.emojis.find(emoji => emoji.name === "");
 let embed = new Discord.RichEmbed()
  .setColor('red')
  .setAuthor(`Vons Uyarı Sistemi`)//Vons Uyarı Sistemi
  .setTitle(`Uyarı 3 Verildi ...`)
  .setTitle(`Uyarı 3 Olduğundan Banlandı ...`)
  .setTitle(`Sebeb: ${sebep}`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  .setThumbnail("https://cdn.discordapp.com/attachments/706103816822456342/708070793745006652/a_d9f4d7bf26535497f05cfeab3b379a70.gif") //
message.channel.send(embed)
message.react(emoji)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı3','uyarı3'],
  permLevel: 0
}
exports.help = {
  name: 'uyarı3',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '.uyarı3<yeni nick>'
}