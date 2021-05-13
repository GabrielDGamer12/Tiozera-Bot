const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Você não tem permissão para fazer isso!"
    );
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author}, escreva um aviso após o comando`)
} else if (content.length < 1) {
  return message.channel.send(`${message.author}, não é possivel enviar um aviso vazio.`);
} else if (content.length > 970) {
  return message.channel.send(`${message.author}, o aviso pode ter no máximo 970 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "825951578225639434");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setTitle("Aviso")
    .setColor("#FFFFF1")
    .addField("Descrição", content)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} aviso enviado!`);

  const emojis = ["✅"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}