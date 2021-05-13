module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Comandos")
    .addField("**▬▬▬▬▬▬▬▬ Gerais: ▬▬▬▬▬▬▬▬**", "ㅤ",false)
    .addField("**+avatar**","Envia o seu avatar(ou de quem for mencionado) no chat\nㅤ")
    .addField("+twitch","Link para o canal do Tiozera na Twitch\nㅤ")
    .addField("+youtube","")
    .addField("+sugestao","")
    .addField("+instagram","")
    .addField("+denuncia","")
    .addField("+dev","")
    .addField("ㅤ","**▬▬▬▬▬▬▬▬ Musica: ▬▬▬▬▬▬▬▬**")
    .setColor("#9900cc")

  message.channel.send(embed);
};