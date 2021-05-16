const dotenv = require('dotenv');
dotenv.config();


const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready, willing, prepared to fight');
});


client.on('message', message => {
	if(message.content === 'DiCaBo are you prepared') {
		message.channel.send('Ready! Willing! Prepared to fight!');
	}
	console.log(message.content);
});

client.login(process.env.TOKEN);
