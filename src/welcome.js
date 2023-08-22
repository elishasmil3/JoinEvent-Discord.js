const { EmbedBuilder } = require('discord.js');

module.exports = (client) => {
    const channelId = process.env.WELCOME_CHANNEL;

    client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.cache.get(channelId);
        if (!channel) { console.log(`Channel ${channelId} not found`); return }
        const joinEmbed = new EmbedBuilder()
            .setTitle('Towns')
            .setDescription(`<@${member.id}> Joined the Town`)
            .setColor('Random')
            .setThumbnail('https://cdn.discordapp.com/icons/1057726099079041065/d1e0bb915ffd1a7bdab9a047fc8c1cf3.png?size=1024')
            .setTimestamp()
            .setFooter({ text: 'No Copyrights :)', iconURL: 'https://cdn.discordapp.com/icons/1057726099079041065/d1e0bb915ffd1a7bdab9a047fc8c1cf3.png?size=1024' })

        channel.send({ embeds: [joinEmbed] });
        console.log(`Someone Joined the Town`);
    })

    client.on('guildMemberRemove', member => {
        const channel = member.guild.channels.cache.get(channelId);
        if (!channel) { console.log(`Channel ${channelId} not found`); return }
        const leaveEmbed = new EmbedBuilder()
            .setTitle('Towns')
            .setDescription(`<@${member.id}> Left the Town`)
            .setColor('Random')
            .setThumbnail('https://cdn.discordapp.com/icons/1057726099079041065/d1e0bb915ffd1a7bdab9a047fc8c1cf3.png?size=1024')
            .setTimestamp()
            .setFooter({ text: 'No Copyrights :)', iconURL: 'https://cdn.discordapp.com/icons/1057726099079041065/d1e0bb915ffd1a7bdab9a047fc8c1cf3.png?size=1024' })
        channel.send({ embeds: [leaveEmbed] })
        console.log(`Someone Left the Town`);
    })
}