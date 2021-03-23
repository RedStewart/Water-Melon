const Discord = require('discord.js');
const ora = require('ora');
const client = new Discord.Client();
require('dotenv').config();

const REGEX = new RegExp('water', 'i');

client.on('message', (msg) => {
  try {
    if (!msg.author.bot) {
      let msgArr = msg.content.split(' ');

      if (!checkWaterStringExists(msgArr)) return;

      msgArr.forEach((el, index) => {
        if (REGEX.test(el)) {
          msgArr[index] = buildWaterString(el);
        }
      });

      sendDiscordMessage(msg, msgArr);
    }
  } catch (err) {
    console.log(err);
  }
});

client.on('ready', () => {
  ora('Bot Online...').start();
});

client.login(process.env.DISCORDTOKEN);

const checkWaterStringExists = (arr) => {
  let waterFlag = false;
  arr.forEach((el) => {
    if (REGEX.test(el)) waterFlag = true;
  });
  return waterFlag;
};

const buildWaterString = (el) => {
  let melonString = ['m', 'e', 'l', 'o', 'n'],
    charArr = [...el];

  for (let x = 0; x < charArr.length; x++) {
    if (charArr[x] === charArr[x].toUpperCase())
      melonString[x] = melonString[x].toUpperCase();
  }

  return melonString.join('');
};

const sendDiscordMessage = (msg, msgArr) => {
  msg.delete();
  msg.channel.send(`**${msg.author.username}:** ${msgArr.join(' ')}`);
};
