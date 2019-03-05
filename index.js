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
        if (msg.content === '!melonlist') {
            const embed = new Discord.RichEmbed()
                .setTitle('water-melon list!')
                .addField('water    =>      melon', '.', true)
                .addField('Water    =>      Melon', '.', false);
            msg.channel.send(embed);
        }

        if (!msg.author.bot) {
            var msgArray = msg.content.split(' ');
            //comparison array to check if message needs to be reposted
            var checkMsgArray = msg.content.split(' ');

            for (x = 0; x < msgArray.length; x++) {
                for (i = 0; i < watermelonArr.length; i++) {
                    if (msgArray[x] == watermelonArr[i][0]) {
                        msgArray[x] = watermelonArr[i][1];                        
                    }
                }
                if (x == msgArray.length - 1) {
                    if (arraysEqual(msgArray, checkMsgArray))
                        break;
                    else {
                        msg.delete();
                        msg.channel.send(`${msg.author.username}: ` + msgArray.join(' '));
                    }
                }
            }

        }
    }
    catch (err) {
        console.log(err)
    }
});

client.on('message', (msg) => {
    try {
        if (msg.content === '!melonlist') {

        }
    }
    catch (err) {
        console.log(err);
    }
});

client.on('ready', () => {
    console.log('Bot online...');
});

client.login(token);


function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}