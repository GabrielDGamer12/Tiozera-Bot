module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle(`Instagram`)
    .setColor("#FF0000")
    .setDescription(`https://www.instagram.com/tiozerag/`)
    .setImage(`https://cdn.exclaimer.com/Handbook%20Images/instagram-icon_128x128.png`)

  message.channel.send(embed);
};