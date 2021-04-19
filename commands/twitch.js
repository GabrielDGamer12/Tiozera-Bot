module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle(`Twitch`)
    .setColor("#FF0000")
    .setDescription(`https://www.twitch.tv/tiozeragames`)
    .setImage(`https://logodownload.org/wp-content/uploads/2017/04/twitch-logo-3.png`)

  message.channel.send(embed);
};