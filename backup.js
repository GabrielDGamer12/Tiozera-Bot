client.on("ready", () => {
  let activities = [
      `${client.users.cache.size} membros!`,
      `+youtube`,
      `Codigo Aberto: +dev`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.log("Estou Online!")
});


// BAN-AND-KICK-COMMAND //
const command = require('./command')

client.on('ready', () => {


  command(client, 'ban', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban() 
        warns_channel = client.channels.cache.get('741370926570143784');
        warns_channel.send(`──── Banimento ────

:boy: Usuario: ${targetMember}
:boy: ID: ${target.id}

👮 Punido por: ${tag} 

──── Banimento ────`)
      } else {
        message.channel.send(`${tag} Especifique alguém para banir.`)
      }
    } else {
      message.channel.send(
        `${tag} Você não tem permissão para usar este comando.`
      )
    }
  })

  command(client, 'kick', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        warns_channel = client.channels.cache.get('741370926570143784');        
        targetMember.kick()
        warns_channel.send(`──── Expulso ────

:boy: Usuario: ${targetMember}
:boy: ID: ${target.id}

👮 Punido por: ${tag}

──── Expulso ────`)
      } else {
        message.channel.send(`${tag} Especifique alguém para expulsar.`)
      }
    } else {
      message.channel.send(
        `${tag} Você não tem permissão para usar este comando.`
      )
    }
  })
})

// BAN-AND-KICK-COMMAND //