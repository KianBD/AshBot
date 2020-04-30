const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Ash Bot Test Version`)
});

client.user.setActivity('QUARANTINE AND CHILL', {
  type: "STREAMING",
  url: "https://www.youtube.com/channel/UC4_ueOpP-1f5wzsBOj0IEuQ?view_as=subscriber"})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  if (msg.content === '>ash') {
    msg.reply('Thats my name for more information please go to our website or dm a owner!');
  }
  if (msg.content === 'Ping') {
    msg.reply('Pong');
  }
  if (msg.content === '>owner') {
    msg.reply('The owners of this server are @Kian#6969 and @cactus#4986!');
  }
  if (msg.content === 'stfu') {
    msg.reply('no u');
  }
  if (msg.content === '>poop') {
    msg.reply('if you insist : https://i.giphy.com/media/LS3GyTEUHandrcndV7/giphy.webp');
  }
  if (msg.content === '>help') {
    msg.reply('Welcome to ASH Bot! The prefix for all my commands is ">" and make sure that the command you type in is all lowercase! The commands are rules, ping, stfu, poop and help! We will be adding much more in future. Enjoy Ash Bot!');
  }
  if (msg.content === '>rules') {
    msg.reply('For the rules check out the #rules channel! ');
  }
  if (msg.content === 'Lydia') {
    msg.reply('Yeeee boiiiiiiiiiiii');
  }
  if (msg.content === 'ding') {
    msg.reply('dong');
  }
  if (msg.content === 'Ding') {
    msg.reply('Dong');
  }
});

client.login('NzAxMzY3NDQxNjQ0NTg1MDAw.XpwvpA.DrtKH3ISg0ZcZBBbsbqf-RVzhi8');