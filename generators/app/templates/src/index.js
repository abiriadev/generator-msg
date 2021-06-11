const MSG = require('msg.ts')

const bot = new MSG.Bot()

bot.setConfig({
    prefix: '!',
})

bot.on('readyState', bot => {
    console.log(`${bot.user.tag} is ready!`)

    bot.owner.send("I'm ready!")
})

bot.indent(true, [])

bot.login(process.env.DISCORD_BOT)
