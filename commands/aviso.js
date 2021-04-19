const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author}, escreva sua denúncia após o comando`)
} else if (content.length < 1) {
  return message.channel.send(`${message.author}, não é possivel enviar uma denúncia vazia.`);
} else if (content.length > 1000) {
  return message.channel.send(`${message.author}, forneça uma denúncia de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "825951578225639434");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setTitle("Aviso")
    .setColor("#FFFFF1")
    .addField("Descrição", content)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} mensagem enviada!`);

  const emojis = ["✅"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}