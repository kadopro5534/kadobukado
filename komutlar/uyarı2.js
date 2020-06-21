const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '720713673412444280' 
let kado = '555023300611538969' 

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Kadirin Ayarladıgı Yetkiye Sahip Değilsin`);
  let member = message.mentions.members.first()
  let uyarilacak = message.mentions.users.first();
  let bug = args.join(" ").slice(0);
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')

  setTimeout(function(){
  member.addRole(kado)
  },3000)

  setTimeout(function(){
  return uyarilacak.send(`Vons'dan Uyarı 2 Aldınız . \`**${bug}**\` sebebiyle uyarıldın. Yetkili: ${message.author.username}`);
  },2000)
    

 const emoji = client.emojis.find(emoji => emoji.name === "");
 let embed = new Discord.RichEmbed()
  .setColor('red')
  .setAuthor(`Vons Uyarı Sistemi`)//Vons Uyarı Sistemi
  .setTitle(`Uyarı 2 Verildi ...`)
  .setTitle(`Sebeb: ${bug}`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  .setThumbnail("https://cdn.discordapp.com/attachments/706103816822456342/708070793745006652/a_d9f4d7bf26535497f05cfeab3b379a70.gif")
message.channel.send(embed)
message.react(emoji)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı2','uyarı2'],
  permLevel: 0
}
exports.help = {
  name: 'uyarı2',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '.uyarı2 <yeni nick>'
}