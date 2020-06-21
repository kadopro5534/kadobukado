const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '721470013143515216' //KAYIT YETKİLİSİ ID
let verbuse = '721498474931159071' //VERİLECEK ROL ID
let albuse = '534161317658099732' //ALINACAK ROL ID
let isimön = '🦄 | ' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin💖')
  if (!isim) return message.channel.send('Bir İsim Yazmalısın 💖')

  setTimeout(function(){
  member.setNickname(`${isimön}${isim}`)
  },2000)
  setTimeout(function(){
  member.addRole(verbuse)
  },3000)
  setTimeout(function(){
  member.removeRole(albuse)
  },4000)
  
 const emoji = client.emojis.find(emoji => emoji.name === "");
 let embed = new Discord.RichEmbed()
  .setColor('red')
  .setDescription(`🎀 Kayıt işlemi Başarılı 🎀

**Kayıt edilen kullanıcı :** ${isimön} ${isim}

**Kayıt işleminde verilen rol :** <@&${verbuse}>

**Kayıt işleminde alınan rol :** <@&${albuse}>
`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  .setThumbnail("https://cdn.discordapp.com/attachments/706103816822456342/708070793745006652/a_d9f4d7bf26535497f05cfeab3b379a70.gif")
message.channel.send(embed)
message.react(emoji)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kız','k'],
  permLevel: 0
}
exports.help = {
  name: 'kız',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '.kız <yeni nick>'
}