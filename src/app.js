const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();
const EmbedBuilder = require('discord.js');
const welcome = require('./welcome.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`Ready as ${c.user.tag}`)
    welcome(client);
});


client.login(process.env.DISCORD_TOKEN);