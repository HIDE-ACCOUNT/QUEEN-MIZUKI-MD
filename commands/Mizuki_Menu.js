const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------
cmd({

            pattern: "menu",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🎲",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/e9c7c757ed8011e8355f8.jpg',

                },

                caption: `
❍═════════════════════❍
    *_Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ ᴍᴇɴᴜ ʟɪꜱᴛ_*
   ✦╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦

┏⃞❑⃝🦹⃟➥.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧜‍♂️⃟➥.2 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧜‍♀️⃟➥.3 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🍁⃟➥.4 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃
┣⃞❑⃝💕⃟➥.5 *ɢᴇɴᴇʀᴇʟ ᴍᴇɴᴜ*
┃
┗⃞❑⃝🔖⃟➥.6 *ʟᴏɢᴏ ᴍᴇɴᴜ*
❍═════════════════════❍
🍀 *_Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ ᴛᴇᴀᴍ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------
cmd({

            pattern: "1",

            desc: "(menu cmdlist).",

            category: "list",

            react: "♣️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/b943d0171b8477aa9962f.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ᴀᴘᴋ
│ ꜰʙ
│ ᴛɪᴋᴛᴏᴋ
│ ɪɴꜱᴛᴀɢʀᴀᴍ
│ ꜱᴜʙᴅʟ
│ ᴛɢꜱ
│ ꜱᴏɴɢ
│ ɢᴅʀɪᴠᴇ
│ ᴛᴛꜱ
│ ᴠɪᴅᴇᴏ
│ ᴀᴜᴅɪᴏ
│ ꜱᴏᴜɴᴅ
│ ʀɪɴɢᴛᴏɴᴇ
│ ᴘɪɴᴛ
│ ᴡᴀᴍᴏᴅ
│ ᴍᴇᴅɪᴀꜰɪʀᴇ
│ ᴘʟᴀʏ
│ ʏᴛꜱ
│ ʏᴛᴍᴘ4
│ ʏᴛᴍᴘ3
│ ʏᴛᴅᴏᴄ
│ ɢɪᴛᴄʟᴏɴᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ ᴛᴇᴀᴍ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )


    //---------------------------------------------------------------------------
cmd({

            pattern: "2",

            desc: "(menu cmdlist).",

            category: "list",

            react: "♨️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/bef332ec2ad67473118ca.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ɢᴅᴇꜱᴄ
│ ɢɴᴀᴍᴇ
│ ᴀɴᴛɪꜰᴀᴋᴇ
│ ᴘᴅᴍ
│ ᴡᴀʀɴ
│ ɪɴᴠɪᴛᴇ
│ ʀᴇꜱᴇᴛ
│ ᴛᴀɢᴀʟʟ
│ ᴋɪᴋ
│ ɴᴜᴍ
│ ʀᴇꜱᴇᴛᴡᴀʀɴ
│ ᴘᴏʟʟ
│ ᴘʀᴏꜰɪʟᴇ
│ ʀᴀɴᴋ
│ ᴘʀᴏᴍᴏᴛᴇ
│ ᴅᴇᴍᴏᴛᴇ
│ ᴋɪᴄᴋ
│ ɢʀᴏᴜᴘ
│ ɢᴘᴘ
│ ᴛᴀɢ
│ ʟᴇꜰᴛ
│ ᴛᴀɢᴀᴅᴍɪɴ
│ ᴀᴅᴅ
│ ᴅᴇʟ
│ ᴄʜᴇᴄᴋᴡᴀʀɴ
│ ʙʀᴏᴀᴅᴄᴀꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ ᴛᴇᴀᴍ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "3",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🌹",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/33dc300e9f6baac68e8cf.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ꜱꜱ
│ ꜱᴜʙꜱᴇᴀʀᴄʜ
│ ɪᴍᴀɢᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ ᴛᴇᴀᴍ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "4",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🐞",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/3262ae2db223ba1022d2b.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ɴᴇᴡꜱ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ɪᴏꜱ
│ ᴡʙɪ
│ ᴛᴇᴄʜɴᴇᴡꜱ
│ ɴᴀꜱᴀ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ ᴛᴇᴀᴍ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({

            pattern: "5",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🦩",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/c607b6545d6f8a7d76c39.jpg',

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *ɢᴇɴᴇʀᴇʟ ᴄᴏᴍᴍᴀɴᴅꜱ*
┃ ├╼╼╼╼╼╼╼╼╼╼●
│ ʜᴇʟᴘ
│ ʟɪꜱᴛ
│ ᴏᴡɴᴇʀ
│ ꜰɪʟᴇ
│ ʀᴇᴘᴏ
│ ᴘɪɴɢ
│ ᴀʟɪᴠᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🍀 *_Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ ᴛᴇᴀᴍ_* 🇱🇰
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------


 
 //---------------------------------------------------------------------------

cmd({

            pattern: "6",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🌐",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: 'https://telegra.ph/file/7334389985bc75fda595a.jpg',

                },

                caption: `┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚃𝙴𝚇𝚃𝙿𝚁𝙾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🌿⃟➤ᴅᴇᴇᴘꜱᴇᴀ
┃ ├❑🌿⃟➤ʜᴏʀʀᴏʀ
┃ ├❑🌿⃟➤ᴡʜɪᴛᴇʙᴇᴀʀ
┃ ├❑🌿⃟➤ᴊᴏᴋᴇʀ
┃ ├❑🌿⃟➤ᴍᴇᴛᴀʟʟɪᴄ
┃ ├❑🌿⃟➤ꜱᴛᴇᴇʟ
┃ ├❑🌿⃟➤ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
┃ ├❑🌿⃟➤ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
┃ ├❑🌿⃟➤ʟᴜxᴜʀʏ
┃ ├❑🌿⃟➤ɢʟᴜᴇ
┃ ├❑🌿⃟➤ꜰᴀʙʀɪᴄ
┃ ├❑🌿⃟➤ᴛᴏxɪᴄ
┃ ├❑🌿⃟➤ᴀɴᴄɪᴇɴᴛ
┃ ├❑🌿⃟➤ᴄʟᴏᴜᴅ
┃ ├❑🌿⃟➤ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
┃ ├❑🌿⃟➤ᴛʜᴜɴᴅᴇʀ
┃ ├❑🌿⃟➤ꜱᴄɪꜰɪ
┃ ├❑🌿⃟➤ꜱᴀɴᴅ
┃ ├❑🌿⃟➤ʀᴀɪɴʙᴏᴡ
┃ ├❑🌿⃟➤ᴘᴇɴᴄɪʟ
┃ ├❑🌿⃟➤ɴᴇᴏɴ
┃ ├❑🌿⃟➤ᴍᴀɢᴍᴀ
┃ ├❑🌿⃟➤ʟᴇᴀᴠᴇꜱ
┃ ├❑🌿⃟➤ɢʟɪᴛᴄʜ
┃ ├❑🌿⃟➤ᴅɪꜱᴄᴏᴠᴇʀʏ
┃ ├❑🌿⃟➤ᴄʜʀɪꜱᴛᴍᴀꜱ
┃ ├❑🌿⃟➤ᴄᴀɴᴅʏ
┃ ├❑🌿⃟➤1917
┃ ├❑🌿⃟➤ɴᴇᴡᴛᴇxᴛ
┃ ├❑🌿⃟➤ʙʟᴀᴄᴋᴘɪɴᴋ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
🍀 *_Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ_* 🍀
🇱🇰 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ ᴛᴇᴀᴍ_* 🇱🇰`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )
