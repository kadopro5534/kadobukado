const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
    const codare = new Discord.RichEmbed()
        .setColor("RED")
    .setTitle(`Vons Say Sistemi`)
        .addField("<a:Loading:618411450700005386> Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("<a:Loading:618411450700005386> Çevrimiçi üye sayısı", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("<a:Loading:618411450700005386> Seslideki üye sayısı", count)
        .setThumbnail("https://cdn.discordapp.com/attachments/706103816822456342/708070793745006652/a_d9f4d7bf26535497f05cfeab3b379a70.gif")
    message.channel.send(codare);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};