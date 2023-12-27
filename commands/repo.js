const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');

cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/MR-KALINDU/QUEEN-MIZUKI-MD')
        let cap = `Hey ${citel.pushName}\n
*⭐ Total Stars:* ${data.stargazers_count} stars

*🍽️ Forks:* ${data.forks_count} forks

*🍁 Repo:* github.com/MR-KALINDU/QUEEN-MIZUKI-MD

        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "QUEEN-MIZUKI",
                    body: "BY MIZUKI TEAM",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
