const Discord = require("discord.js")

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)

    var motivo = args.slice(1).join(" ");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Desculpe, mas você não tem permissão para isso.')
    if (!motivo) return message.channel.send(`Formato inválido. Formato correto: **+kick @usario motivo.**`)
        
        let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
        var canal = message.guild.channels.cache.find(ch => ch.id === "836081235888439323");
        message.channel.send(`Deseja realmente expulsar  ${user}? clique no emoji para confirmar.`).then(msg => {
        msg.react("👍")
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id); {
                let embed = canal.send(
                new Discord.MessageEmbed()
                .setTitle('🚨 - EXPULSÃO')
                .setColor('#ff210e')
                .setTimestamp()
                .setThumbnail(avatar)
                .addFields(
                  {
                    name: "``Informações da Expulsão:``",
                    value: `**Usuário**: ${membro} \n**ID**: ${membro.id} \n**Motivo**: ${motivo} \n **Expulso por**: ${message.author.username}`
                  }
                )
              )
            }
            membro.kick();
        })
    })}
