const Discord = require('discord.js');

const client = new Discord.Client();


const prefix = 'lol '

const fs = require('fs');

require("dotenv").config();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('ur bot is gay but online');
});

client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'joke'){
        client.commands.get('joke').execute(message, args);
    }

    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }

    if (command === 'credits'){
        client.commands.get('credits').execute(message, args);
    }

});


client.login(process.env.BOT_TOKEN);