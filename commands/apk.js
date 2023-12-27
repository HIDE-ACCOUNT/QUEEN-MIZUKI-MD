const {
    tlang,
    botpic,
    cmd,
    prefix,
    runtime,
    Config,
    formatp,
    fetchJson,
  } = require('../lib'),
  { download } = require('aptoide-scraper')
cmd(
  {
    pattern: 'downapk',
    alias: ['ps', 'apk', 'playstore'],
    desc: 'download playstore app',
    react: '\uD83D\uDC7B',
    category: 'downloader',
    filename: __filename,
  },
  async (_0x4ece64, _0xda3c5d, _0x1c9881) => {
    if (!_0x1c9881) {
      return
    }
    try {
      let _0x15c514 = await download(_0x1c9881)
      const _0x41debb = _0x15c514.dllink,
        _0x1f7596 = _0x15c514.name,
        _0x516076 = _0x15c514.icon,
        _0x597a02 = _0x15c514.lastup,
        _0x411162 = _0x15c514.package,
        _0x4d3c5e = _0x15c514.size
      return (
        await _0x4ece64.sendMessage(_0xda3c5d.chat, {
          image: { url: _0x516076 },
          caption:
            '      \n \n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n  \uD83D\uDCA0 ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴀᴘᴋ-ᴅᴏᴡɴ \uD83D\uDCA0 \n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513               \n\n|:̵\uD83C\uDF43 ᴀᴘᴘ ɴᴀᴍᴇ: ' +
            _0x1f7596 +
            '           \n\n|:̵\uD83C\uDF41 ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇ: ' +
            _0x597a02 +
            '          \n\n|:̵\uD83C\uDF43 ᴘᴀᴄᴋᴀɢᴇ ɴᴀᴍᴇ: ' +
            _0x411162 +
            '             \n\n|:̵\uD83C\uDF41 ꜰɪʟᴇ ꜱɪᴢᴇ: ' +
            _0x4d3c5e +
            ' \n\n|:̵\uD83C\uDF43 ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴀᴘᴋ\n\n|:̵\uD83C\uDF41 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ\n\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251B\n',
        }),
        _0x4ece64.sendMessage(
          _0xda3c5d.chat,
          {
            document: { url: _0x41debb },
            mimetype: 'application/vnd.android.package-archive',
            fileName: _0x1f7596,
          },
          { quoted: _0xda3c5d }
        )
      )
    } catch (_0x284e58) {
      console.error(_0x284e58)
      _0xda3c5d.reply(
        '*An error occurred while processing your request. Please try again later.' +
          _0x284e58 +
          '*'
      )
    }
  }
)
