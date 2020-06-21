const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

let kado = '721470013143515216'

exports.run = async (client, message, args) => {
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!message.member.roles.has(kado)) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz! KayıtSorumlusu Kullanabilir . `)
  if(!kullanici) return message.reply(`:warning: Lütfen bir kullanıcı giriniz!`)
  if(!isim) return message.reply(`:warning: Lütfen bir kullanıcı adı giriniz!`)
  if(isim.length > 32) return message.reply(`:warning: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.get(kullanici.id).setNickname(`🦄 | ${isim}`)
  message.channel.send(`:white_check_mark: Başarılı bir şekilde \`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak değiştirildi.`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['knick'],
    permLevel: 0
}

exports.help = {
    name: 'knick',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'knick @kullanıcı <kullanıcı adı>'
}