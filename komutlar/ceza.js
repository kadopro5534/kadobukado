
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.find("name","✧ Cezalı Yetklisi ✧")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** \*✧ Cezalı Yetklisi ✧*` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
 let lozBey = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!lozBey) return message.channel.send("Lütfen Cezalıya Atılıcak kişiyi etiketleyiniz.");
  if(lozBey.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Benden yetkili birini Cezalı Atamam..");
  if (lozBey.id === message.author.id) return message.channel.send("Kendinizi Jaile Atamazsınız..");
  let lozRol = message.guild.roles.find(`name`, "Cezalı");

  if(!lozRol){
    try{
      lozRol = await message.guild.createRole({
        name: "Cezalı Rol Adı",
        color: "#666666",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(lozRol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let lozZaman = args[1];
  if(!lozZaman) return message.channel.send("Lütfen doğru bir zaman dilimi giriniz. Örneğin: **.ceza @kişi 1s/m/h/d sebep**");
  let sebep = args[2]
  if(!sebep) return message.channel.send("Lütfen bir sebep giriniz. Örneğin: **.ceza @kişi 1s/m/h/d sebep**");

  await(lozBey.addRole(lozRol.id));
  await(lozBey.removeRole("721472526621868114"));
   let embed = new Discord.RichEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(`${lozBey} Adlı Kişi ${lozZaman} süreliğine <@${message.author.id}> tarafından ${sebep} sebebiyle Cezalıya Atıldı!`)
                .setColor("RANDOM");
  message.channel.send(embed);

  setTimeout(function(){
    lozBey.removeRole(lozRol.id);
    lozBey.addRole("721472526621868114");
    let sembed =  new Discord.RichEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(`${lozBey} Adlı Kişinin, ${lozZaman} sürelik Cezası, otomatik olarak kaldırıldı.`)
                .setColor("RANDOM");
    message.channel.send(sembed);
  }, ms(lozZaman));

  message.delete();

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ceza"],
    permLevel: 0
};

exports.help = {
    name: 'ceza',
    description: 'ceza',
    usage: 'ceza'
};