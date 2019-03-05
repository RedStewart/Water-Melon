const Discord = require('discord.js');
const path = require('path');
const config = require(path.join(__dirname, 'config.json'));

const token = config.token;

const client = new Discord.Client();

var watermelonArr = [
    ['water', 'melon'],
    ['Water', 'Melon']
];

client.on('message', (msg) => {
    try {
        if (!msg.author.bot) {
            var msgArray = msg.content.split(' ');

            for (x = 0; x < msgArray.length; x++) {
                for(i = 0; i < watermelonArr.length; i++){
                    if (msgArray[x] == watermelonArr[i][0]) {
                        msgArray[x] = watermelonArr[i][1];
                        if(x == msgArray.length - 1){
                            msg.delete();
                            msg.channel.send(`${msg.author.username}: ` + msgArray.join(' '));
                        }
                    }
                }                
            }
        }
    }
    catch (err) {
        console.log(err)
    }
});

client.on('ready', () => {
    console.log('Bot online...');
});

client.login(token);