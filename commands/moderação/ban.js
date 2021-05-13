const Discord = require("discord.js")

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)

    var motivo = args.slice(1).join(" ");
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Desculpe, mas você não tem permissão para isso.')
    if (!motivo) return message.channel.send(`Formato inválido. Formato correto: **+ban @usario motivo.**`)
        
        let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
        var canal = message.guild.channels.cache.find(ch => ch.id === "836081235888439323");
        message.channel.send(`Deseja realmente banir  ${user}? clique no emoji para confirmar.`).then(msg => {
        msg.react("👍")
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id); {
                let embed = canal.send(
                new Discord.MessageEmbed()
                .setTitle('🚨 - BANIMENTO')
                .setColor('#ff210e')
                .setTimestamp()
                .setThumbnail(avatar)
                .addFields(
                  {
                    name: "``Informações do Banimento:``",
                    value: `**Usuário**: ${membro} \n**ID**: ${membro.id} \n**Motivo**: ${motivo} \n **Banido por**: ${message.author.username}`
                  }
                )
              )
            }
            membro.ban();
        })
    })}
