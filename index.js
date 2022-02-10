const {Client, Intents} = require("discord.js")
const config = require("./config.json")
const client  = new Client({ intents: [Intents.FLAG.GUILD_MEMBERS] })
const channelBOton = require(member.guild.channels.cache.get(891648182784770059))


client.once('ready', () => {
 
    console.log( `${client.user.username} is online`)
    return message.channelBOton.send("Bot back online")
}
            
            client.login(config.token)