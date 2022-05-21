require('dotenv').config();
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const fs = require('fs')
const path = require('path')
const { createRandomPhrase, makeUniqueGreeting } = require('./utils/phraseFunctions')



const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
client.commands = new Discord.Collection();

const prefix = "!"


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${ file }`);
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`${ client.user.tag } has logged in.`)
})



client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
})


client.on('guildMemberAdd', async member => {
    member.guild.channels.cache.get('884434543543726134').send(`${ makeUniqueGreeting() }, <@${ member.user.id }>.  ${ await createRandomPhrase() }.`);


});




client.login(process.env.TESTBOT_TOKEN)