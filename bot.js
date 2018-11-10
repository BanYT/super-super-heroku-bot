const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!";

bot.on('ready', () => {
  console.log(`Kitilen initilized.`);
});
bot.on('message', msg => {
 if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

 let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);

 if (command === "ping") {
    msg.channel.send("Pong! (hold on, processing latency...)").then(m => m.edit(`Pong! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
  }

});

bot.login(process.env.BOT_TOKEN);
