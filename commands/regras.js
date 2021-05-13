module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Esse comandos está indisponível no momento!"
    );
  const embed = new Discord.MessageEmbed()
    .setTitle(`Regras`)
    .setColor("#FF0000")
    .setDescription(`**Comando em Desenvolvimeento**`)

  message.channel.send(embed);
};