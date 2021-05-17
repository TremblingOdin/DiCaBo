const dotenv = require('dotenv');
dotenv.config();

const config = require('./config.json');
const prefix = config.prefix;

const Discord = require('discord.js');
const client = new Discord.Client();

const calendar = require('./calendar.js');

client.once('ready', () => {
	console.log("Online and running");
});


client.on('message', message => {
	if(!message.content.startsWith(`${prefix}`)) return;
	
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if(message.author.bot) {
		for (let j = 0; j < 20; j++) {
			message.channel.send("No no no no no no no");
		}
		message.channel.send(`Hidden ${message.author.username}'s message`);
		message.channel.send(`It's not playing dirty if I don't leave any bits in an unsaved state`);
	}

	switch(command) {
		case `schedule_calendar`:
			message.channel.send();
			break;
		case `remove_calendar`:
			message.channel.send();
			break;
		case `show_calendar`:
			message.channel.send();
			break;
		default:
			message.channel.send(`I did not understand that message ${message.author.username}. Perhaps you should actually read my manual`);
			break;
	}
});

client.login(process.env.TOKEN);
