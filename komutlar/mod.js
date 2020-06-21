const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let kişi = message.mentions.members.first() || message.author;
   if(message.channel.id !== '534803252731052032') return message.channel.send('Bu Komutu <#534803252731052032> Kullanabilirsiniz'); 
  message.channel.send(`Onay Kodunuz : **${kişi.id}** \nBu Kodu Sitedeki Onay Kodu Kısmına Koyunuz.`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onaykodu"],
  permLevel: 0
};

exports.help = {
  name: "id",
  description: "Belirtilen Kişinin ID'sini Atar!",
  usage: "id"
};