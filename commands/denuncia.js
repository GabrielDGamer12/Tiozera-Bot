const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.slice(1).join(" ");
const userid = message.mentions.users.first();

if (!args[0]) {
  return message.channel.send(`${message.author}, não é possivel enviar uma denúncia vazia, envie a denuncia com **+denuncia @(usuario a ser denunciado) (mensagem da denuncia)**`)
} else if (content.length < 1) {
  return message.channel.send(`${message.author}, não é possivel enviar uma denúncia vazia, envie a denuncia com **+denuncia @(usuario a ser denunciado) (mensagem da denuncia)**`);
} else if (content.length > 1000) {
  return message.channel.send(`${message.author}, forneça uma denúncia de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "825951578225639434");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setTitle("Denúncia")
    .setColor("#FFFFF1")
    .addField("Autor da Denúncia:", message.author)
    .addField("Membro Denunciado", userid)
    .addField("ID do Denunciado:", userid.id)
    .addField("Denúncia", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} sua denúncia foi enviada com sucesso!`);

  const emojis = ["✅", "❌"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}