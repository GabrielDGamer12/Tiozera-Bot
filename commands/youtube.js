module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle(`Youtube`)
    .setColor("#FF0000")
    .setDescription(`https://www.youtube.com/c/tiozeragames`)
    .setImage(`https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-256.png`)

  message.channel.send(embed);
};