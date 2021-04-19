module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle(`Código Aberto`)
    .setColor("#FF0000")
    .setDescription(`**https://replit.com/@GabrielDGamer/Tiozera-Bot**\n\n Estou sendo desenvolvido por:\n**GabrielDGamer#6897**`)

  message.channel.send(embed);
};