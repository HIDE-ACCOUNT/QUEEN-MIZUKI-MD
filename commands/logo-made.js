var _0x25e005 = (function () {
    var _0x2c757a = true
    return function (_0xbfabe4, _0x36b7ea) {
      var _0x2235bd = _0x2c757a
        ? function () {
            if (_0x36b7ea) {
              var _0x103b59 = _0x36b7ea.apply(_0xbfabe4, arguments)
              return (_0x36b7ea = null), _0x103b59
            }
          }
        : function () {}
      return (_0x2c757a = false), _0x2235bd
    }
  })(),
  _0xf88f51 = _0x25e005(this, function () {
    return _0xf88f51
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0xf88f51)
      .search('(((.+)+)+)+$')
  })
_0xf88f51()
var _0x5f0da8 = (function () {
  var _0x50c738 = true
  return function (_0x3445c3, _0x473027) {
    var _0x3a0642 = _0x50c738
      ? function () {
          if (_0x473027) {
            var _0x15d726 = _0x473027.apply(_0x3445c3, arguments)
            return (_0x473027 = null), _0x15d726
          }
        }
      : function () {}
    return (_0x50c738 = false), _0x3a0642
  }
})()
;(function () {
  _0x5f0da8(this, function () {
    var _0x326d54 = new RegExp('function *\\( *\\)'),
      _0xad6df8 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0xa8e13c = _0x11c0b0('init')
    !_0x326d54.test(_0xa8e13c + 'chain') || !_0xad6df8.test(_0xa8e13c + 'input')
      ? _0xa8e13c('0')
      : _0x11c0b0()
  })()
})()
var _0x2dc5ce = (function () {
    var _0x535cf1 = true
    return function (_0x5525a7, _0x19c29e) {
      var _0x59e5ef = _0x535cf1
        ? function () {
            if (_0x19c29e) {
              var _0x10ddea = _0x19c29e.apply(_0x5525a7, arguments)
              return (_0x19c29e = null), _0x10ddea
            }
          }
        : function () {}
      return (_0x535cf1 = false), _0x59e5ef
    }
  })(),
  _0x3a2275 = _0x2dc5ce(this, function () {
    var _0x18dce1
    try {
      var _0x405096 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x18dce1 = _0x405096()
    } catch (_0x13ad54) {
      _0x18dce1 = window
    }
    var _0x20632a = (_0x18dce1.console = _0x18dce1.console || {}),
      _0x1dc814 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x3bf2ad = 0; _0x3bf2ad < _0x1dc814.length; _0x3bf2ad++) {
      var _0x507950 = _0x2dc5ce.constructor.prototype.bind(_0x2dc5ce),
        _0xe23db6 = _0x1dc814[_0x3bf2ad],
        _0x47a256 = _0x20632a[_0xe23db6] || _0x507950
      _0x507950['__proto__'] = _0x2dc5ce.bind(_0x2dc5ce)
      _0x507950.toString = _0x47a256.toString.bind(_0x47a256)
      _0x20632a[_0xe23db6] = _0x507950
    }
  })
_0x3a2275()
const Secktor = require('../lib')
let {
  fancytext,
  tiny,
  runtime,
  formatp,
  botpic,
  prefix,
  sck1,
  tlang,
  cmd,
  fetchJson,
  getBuffer,
} = require('../lib')
const axios = require('axios'),
  fetch = require('node-fetch'),
  Config = require('../config')
var fs = require('fs'),
  TextPro = require('@sl-code-lords/text-pro-me'),
  text_pro = new TextPro(),
  _0x1d86f4 = {}
_0x1d86f4.pattern = 'deepsea'
_0x1d86f4.alias = ['logo1']
_0x1d86f4.category = 'textpro'
_0x1d86f4.react = '\uD83C\uDFA1'
_0x1d86f4.desc = 'Some text to image feature with various styles.'
cmd(_0x1d86f4, async (_0x2ef2bf, _0x3dd005, _0x24bdf8) => {
  if (!_0x24bdf8) {
    return _0x3dd005.reply('_Need text._')
  }
  try {
    var _0x5116f6 = await text_pro.one_text_create(
        'https://textpro.me/pornhub-style-logo-online-generator-free-977.html',
        _0x24bdf8
      ),
      _0xc6dd27 = { url: _0x5116f6.url },
      _0xc119b2 = {
        image: _0xc6dd27,
        caption: 'ᴍᴀᴅᴇ ʙʏ Qᴜᴇᴇɴ-ᴍɪᴢᴜᴋɪ-ᴍᴅ \uD83C\uDF61',
      }
    _0x2ef2bf.sendMessage(_0x3dd005.chat, _0xc119b2, { quoted: _0x3dd005 })
  } catch (_0x288910) {
    console.log(_0x288910)
    _0x3dd005.reply('*' + _0x288910 + '* \u2757')
  }
})
var _0x534306 = {}
_0x534306.pattern = 'horror'
_0x534306.alias = ['logo2']
_0x534306.category = 'textpro'
_0x534306.react = '\uD83C\uDFA1'
_0x534306.desc = 'Some text to image feature with various styles.'
cmd(_0x534306, async (_0x165ff9, _0x508188, _0x28b117) => {
  var _0x31f373 = await text_pro.one_text_create(
      'https://textpro.me/horror-blood-text-effect-online-883.html',
      _0x28b117
    ),
    _0x2e5df6 = { url: _0x31f373.url },
    _0x547279 = {
      image: _0x2e5df6,
      caption: 'ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61',
    }
  _0x165ff9.sendMessage(_0x508188.chat, _0x547279, { quoted: _0x508188 })
})
var _0x32956f = {}
_0x32956f.pattern = 'whitebear'
_0x32956f.alias = ['logo3']
_0x32956f.category = 'textpro'
_0x32956f.react = '\uD83C\uDFA1'
_0x32956f.desc = 'Some text to image feature with various styles.'
cmd(_0x32956f, async (_0x5deda7, _0x5920b3, _0x26c3ff) => {
  var _0x4307e1 = await text_pro.one_text_create(
      'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html',
      _0x26c3ff
    ),
    _0x1bbff3 = { url: _0x4307e1.url },
    _0x260d1c = {
      image: _0x1bbff3,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x5deda7.sendMessage(_0x5920b3.chat, _0x260d1c, { quoted: _0x5920b3 })
})
var _0x5b1576 = {}
_0x5b1576.pattern = 'joker'
_0x5b1576.alias = ['logo4']
_0x5b1576.category = 'textpro'
_0x5b1576.react = '\uD83C\uDFA1'
_0x5b1576.desc = 'Some text to image feature with various styles.'
cmd(_0x5b1576, async (_0xde5631, _0x52c232, _0x2e8aab) => {
  var _0x537644 = await text_pro.one_text_create(
      'https://textpro.me/create-logo-joker-online-934.html',
      _0x2e8aab
    ),
    _0x2f73ba = { url: _0x537644.url },
    _0x49c406 = {
      image: _0x2f73ba,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0xde5631.sendMessage(_0x52c232.chat, _0x49c406, { quoted: _0x52c232 })
})
var _0x3f82ee = {}
_0x3f82ee.pattern = 'metallic'
_0x3f82ee.alias = ['logo5']
_0x3f82ee.category = 'textpro'
_0x3f82ee.react = '\uD83C\uDFA1'
_0x3f82ee.desc = 'Some text to image feature with various styles.'
cmd(_0x3f82ee, async (_0x50d21e, _0x271f83, _0x1c42b4) => {
  var _0xa5410b = await text_pro.one_text_create(
      'https://textpro.me/create-a-metallic-text-effect-free-online-1041.html',
      _0x1c42b4
    ),
    _0x3e00f3 = { url: _0xa5410b.url },
    _0x43fc17 = {
      image: _0x3e00f3,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x50d21e.sendMessage(_0x271f83.chat, _0x43fc17, { quoted: _0x271f83 })
})
var _0x81889f = {}
_0x81889f.pattern = 'steel'
_0x81889f.alias = ['logo6']
_0x81889f.category = 'textpro'
_0x81889f.react = '\uD83C\uDFA1'
_0x81889f.desc = 'Some text to image feature with various styles.'
cmd(_0x81889f, async (_0x3d0c0b, _0x39ee09, _0x2d0e85) => {
  var _0x7834a5 = await text_pro.one_text_create(
      'https://textpro.me/steel-text-effect-online-921.html',
      _0x2d0e85
    ),
    _0x58847b = { url: _0x7834a5.url },
    _0x58ba96 = {
      image: _0x58847b,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x3d0c0b.sendMessage(_0x39ee09.chat, _0x58ba96, { quoted: _0x39ee09 })
})
var _0x1a16cc = {}
_0x1a16cc.pattern = 'harrypotter'
_0x1a16cc.alias = ['logo7']
_0x1a16cc.category = 'textpro'
_0x1a16cc.react = '\uD83C\uDFA1'
_0x1a16cc.desc = 'Some text to image feature with various styles.'
cmd(_0x1a16cc, async (_0x4ec035, _0x11eee9, _0x53a28e) => {
  var _0x555a0b = await text_pro.one_text_create(
      'https://textpro.me/create-harry-potter-text-effect-online-1025.html',
      _0x53a28e
    ),
    _0x31ea38 = { url: _0x555a0b.url },
    _0x4f150b = {
      image: _0x31ea38,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4ec035.sendMessage(_0x11eee9.chat, _0x4f150b, { quoted: _0x11eee9 })
})
var _0x1931b9 = {}
_0x1931b9.pattern = 'underwater'
_0x1931b9.alias = ['logo8']
_0x1931b9.category = 'textpro'
_0x1931b9.react = '\uD83C\uDFA1'
_0x1931b9.desc = 'Some text to image feature with various styles.'
cmd(_0x1931b9, async (_0x4d52c7, _0x30ed6c, _0x5eb861) => {
  var _0x1efac8 = await text_pro.one_text_create(
      'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html',
      _0x5eb861
    ),
    _0x2da95a = { url: _0x1efac8.url },
    _0x5912e1 = {
      image: _0x2da95a,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4d52c7.sendMessage(_0x30ed6c.chat, _0x5912e1, { quoted: _0x30ed6c })
})
var _0x4916dc = {}
_0x4916dc.pattern = 'luxury'
_0x4916dc.alias = ['logo9']
_0x4916dc.category = 'textpro'
_0x4916dc.react = '\uD83C\uDFA1'
_0x4916dc.desc = 'Some text to image feature with various styles.'
cmd(_0x4916dc, async (_0x7ba66, _0xbcc6c1, _0x34991d) => {
  var _0x337677 = await text_pro.one_text_create(
      'https://textpro.me/3d-luxury-gold-text-effect-online-1003.html',
      _0x34991d
    ),
    _0xf40d90 = { url: _0x337677.url },
    _0x269b76 = {
      image: _0xf40d90,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x7ba66.sendMessage(_0xbcc6c1.chat, _0x269b76, { quoted: _0xbcc6c1 })
})
var _0x33e35b = {}
_0x33e35b.pattern = 'glue'
_0x33e35b.alias = ['logo10']
_0x33e35b.category = 'textpro'
_0x33e35b.desc = 'Some text to image feature with various styles.'
cmd(_0x33e35b, async (_0x3d77b2, _0x429462, _0x3aa8e0) => {
  var _0x3c1e1c = await text_pro.one_text_create(
      'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html',
      _0x3aa8e0
    ),
    _0x22b670 = { url: _0x3c1e1c.url },
    _0x399444 = {
      image: _0x22b670,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x3d77b2.sendMessage(_0x429462.chat, _0x399444, { quoted: _0x429462 })
})
var _0x82e188 = {}
_0x82e188.pattern = 'fabric'
_0x82e188.alias = ['logo11']
_0x82e188.category = 'textpro'
_0x82e188.desc = 'Some text to image feature with various styles.'
cmd(_0x82e188, async (_0x59e5f8, _0x4973b4, _0x47ada) => {
  var _0x23f308 = await text_pro.one_text_create(
      'https://textpro.me/fabric-text-effect-online-964.html',
      _0x47ada
    ),
    _0x209e1c = { url: _0x23f308.url },
    _0x3f50dc = {
      image: _0x209e1c,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x59e5f8.sendMessage(_0x4973b4.chat, _0x3f50dc, { quoted: _0x4973b4 })
})
var _0xa682a8 = {}
_0xa682a8.pattern = 'toxic'
_0xa682a8.alias = ['logo12']
_0xa682a8.category = 'textpro'
_0xa682a8.desc = 'Some text to image feature with various styles.'
cmd(_0xa682a8, async (_0x557dc5, _0x285651, _0x315fba) => {
  var _0x12336a = await text_pro.one_text_create(
      'https://textpro.me/toxic-text-effect-online-901.html',
      _0x315fba
    ),
    _0x25ba9c = { url: _0x12336a.url },
    _0x993e6e = {
      image: _0x25ba9c,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x557dc5.sendMessage(_0x285651.chat, _0x993e6e, { quoted: _0x285651 })
})
var _0x2a2cbf = {}
_0x2a2cbf.pattern = 'ancient'
_0x2a2cbf.alias = ['logo13']
_0x2a2cbf.category = 'textpro'
_0x2a2cbf.desc = 'Some text to image feature with various styles.'
cmd(_0x2a2cbf, async (_0x189f81, _0x5c5514, _0x444cb1) => {
  var _0x223b10 = await text_pro.one_text_create(
      'https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html',
      _0x444cb1
    ),
    _0x2d31d5 = { url: _0x223b10.url },
    _0x126ae5 = {
      image: _0x2d31d5,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x189f81.sendMessage(_0x5c5514.chat, _0x126ae5, { quoted: _0x5c5514 })
})
var _0x431b62 = {}
_0x431b62.pattern = 'cloud'
_0x431b62.alias = ['logo14']
_0x431b62.category = 'textpro'
_0x431b62.react = '\uD83C\uDFA1'
_0x431b62.desc = 'Some text to image feature with various styles.'
cmd(_0x431b62, async (_0x4bde5f, _0x3df661, _0x2fe10f) => {
  if (!_0x2fe10f) {
    return _0x3df661.reply('_Need text._')
  }
  var _0x47c05e = await text_pro.one_text_create(
      'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html',
      _0x2fe10f
    ),
    _0x5ac79f = { url: _0x47c05e.url },
    _0x2b55d9 = {
      image: _0x5ac79f,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4bde5f.sendMessage(_0x3df661.chat, _0x2b55d9, { quoted: _0x3df661 })
})
var _0x335ba9 = {}
_0x335ba9.pattern = 'transformer'
_0x335ba9.alias = ['logo15']
_0x335ba9.category = 'textpro'
_0x335ba9.react = '\uD83C\uDFA1'
_0x335ba9.desc = 'Some text to image feature with various styles.'
cmd(_0x335ba9, async (_0x590afe, _0x1b8a9a, _0x20d1d1) => {
  if (!_0x20d1d1) {
    return _0x1b8a9a.reply('_Need text._')
  }
  var _0x402cb7 = await text_pro.one_text_create(
      'https://textpro.me/create-a-transformer-text-effect-online-1035.html',
      _0x20d1d1
    ),
    _0x4dbfba = { url: _0x402cb7.url },
    _0xe878f8 = {
      image: _0x4dbfba,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x590afe.sendMessage(_0x1b8a9a.chat, _0xe878f8, { quoted: _0x1b8a9a })
})
var _0x4a99dd = {}
_0x4a99dd.pattern = 'thunder'
_0x4a99dd.alias = ['logo16']
_0x4a99dd.category = 'textpro'
_0x4a99dd.react = '\uD83C\uDFA1'
_0x4a99dd.desc = 'Some text to image feature with various styles.'
cmd(_0x4a99dd, async (_0x9bd033, _0x3654b0, _0x1a190d) => {
  if (!_0x1a190d) {
    return _0x3654b0.reply('_Need text._')
  }
  var _0x59bb69 = await text_pro.one_text_create(
      'https://textpro.me/online-thunder-text-effect-generator-1031.html',
      _0x1a190d
    ),
    _0x4982a8 = { url: _0x59bb69.url },
    _0x708583 = {
      image: _0x4982a8,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x9bd033.sendMessage(_0x3654b0.chat, _0x708583, { quoted: _0x3654b0 })
})
var _0x2b8f26 = {}
_0x2b8f26.pattern = 'scifi'
_0x2b8f26.alias = ['logo17']
_0x2b8f26.category = 'textpro'
_0x2b8f26.react = '\uD83C\uDFA1'
_0x2b8f26.desc = 'Some text to image feature with various styles.'
cmd(_0x2b8f26, async (_0x4f2c91, _0x5e6f0f, _0x3e0a99) => {
  if (!_0x3e0a99) {
    return _0x5e6f0f.reply('_Need text._')
  }
  var _0xe7fc48 = await text_pro.one_text_create(
      'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html',
      _0x3e0a99
    ),
    _0x5b5138 = { url: _0xe7fc48.url },
    _0x54f464 = {
      image: _0x5b5138,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4f2c91.sendMessage(_0x5e6f0f.chat, _0x54f464, { quoted: _0x5e6f0f })
})
var _0x98ae30 = {}
_0x98ae30.pattern = 'sand'
_0x98ae30.alias = ['logo18']
_0x98ae30.category = 'textpro'
_0x98ae30.react = '\uD83C\uDFA1'
_0x98ae30.desc = 'Some text to image feature with various styles.'
cmd(_0x98ae30, async (_0x4936f1, _0x281721, _0x23307d) => {
  if (!_0x23307d) {
    return _0x281721.reply('_Need text._')
  }
  var _0x3fccbc = await text_pro.one_text_create(
      'https://textpro.me/write-in-sand-summer-beach-free-online-991.html',
      _0x23307d
    ),
    _0x224234 = { url: _0x3fccbc.url },
    _0x4d5751 = {
      image: _0x224234,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4936f1.sendMessage(_0x281721.chat, _0x4d5751, { quoted: _0x281721 })
})
var _0x12cdcc = {}
_0x12cdcc.pattern = 'rainbow'
_0x12cdcc.alias = ['logo19']
_0x12cdcc.category = 'textpro'
_0x12cdcc.react = '\uD83C\uDFA1'
_0x12cdcc.desc = 'Some text to image feature with various styles.'
cmd(_0x12cdcc, async (_0x307917, _0x4c7c8b, _0x566596) => {
  if (!_0x566596) {
    return _0x4c7c8b.reply('_Need text._')
  }
  var _0x1db175 = await text_pro.one_text_create(
      'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html',
      _0x566596
    ),
    _0xc3b39 = { url: _0x1db175.url },
    _0x55cb4f = {
      image: _0xc3b39,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x307917.sendMessage(_0x4c7c8b.chat, _0x55cb4f, { quoted: _0x4c7c8b })
})
var _0x4ec153 = {}
_0x4ec153.pattern = 'pencil'
_0x4ec153.alias = ['logo20']
_0x4ec153.category = 'textpro'
_0x4ec153.react = '\uD83C\uDFA1'
_0x4ec153.desc = 'Some text to image feature with various styles.'
cmd(_0x4ec153, async (_0x4b81b9, _0x4d1097, _0x1d5de5) => {
  if (!_0x1d5de5) {
    return _0x4d1097.reply('_Need text._')
  }
  var _0x3be5ba = await text_pro.one_text_create(
      'https://textpro.me/create-a-sketch-text-effect-online-1044.html',
      _0x1d5de5
    ),
    _0x1577b0 = { url: _0x3be5ba.url },
    _0x4bf817 = {
      image: _0x1577b0,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4b81b9.sendMessage(_0x4d1097.chat, _0x4bf817, { quoted: _0x4d1097 })
})
var _0x13045d = {}
_0x13045d.pattern = 'neon'
_0x13045d.alias = ['logo21']
_0x13045d.category = 'textpro'
_0x13045d.react = '\uD83C\uDFA1'
_0x13045d.desc = 'Some text to image feature with various styles.'
cmd(_0x13045d, async (_0x4bf456, _0x3865b5, _0x2b3092) => {
  if (!_0x2b3092) {
    return _0x3865b5.reply('_Need text._')
  }
  var _0x104aaa = await text_pro.one_text_create(
      'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html',
      _0x2b3092
    ),
    _0x4e0c56 = { url: _0x104aaa.url },
    _0x48cf9c = {
      image: _0x4e0c56,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4bf456.sendMessage(_0x3865b5.chat, _0x48cf9c, { quoted: _0x3865b5 })
})
;(function () {
  var _0x406ef1
  try {
    var _0x4b486a = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x406ef1 = _0x4b486a()
  } catch (_0x43f8fd) {
    _0x406ef1 = window
  }
  _0x406ef1.setInterval(_0x11c0b0, 4000)
})()
var _0x2f80da = {}
_0x2f80da.pattern = 'magma'
_0x2f80da.alias = ['logo22']
_0x2f80da.category = 'textpro'
_0x2f80da.react = '\uD83C\uDFA1'
_0x2f80da.desc = 'Some text to image feature with various styles.'
cmd(_0x2f80da, async (_0x598de5, _0x64feaf, _0x132f52) => {
  if (!_0x132f52) {
    return _0x64feaf.reply('_Need text._')
  }
  var _0x204502 = await text_pro.one_text_create(
      'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html',
      _0x132f52
    ),
    _0x5daf26 = { url: _0x204502.url },
    _0x55b52c = {
      image: _0x5daf26,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x598de5.sendMessage(_0x64feaf.chat, _0x55b52c, { quoted: _0x64feaf })
})
var _0xa85f = {}
_0xa85f.pattern = 'leaves'
_0xa85f.alias = ['logo23']
_0xa85f.category = 'textpro'
_0xa85f.react = '\uD83C\uDFA1'
_0xa85f.desc = 'Some text to image feature with various styles.'
cmd(_0xa85f, async (_0x142ff7, _0xe9f925, _0x474427) => {
  if (!_0x474427) {
    return _0xe9f925.reply('_Need text._')
  }
  var _0x4aecb7 = await text_pro.one_text_create(
      'https://textpro.me/natural-leaves-text-effect-931.html',
      _0x474427
    ),
    _0x361b13 = { url: _0x4aecb7.url },
    _0x4162d8 = {
      image: _0x361b13,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x142ff7.sendMessage(_0xe9f925.chat, _0x4162d8, { quoted: _0xe9f925 })
})
var _0x4e5863 = {}
_0x4e5863.pattern = 'glitch'
_0x4e5863.alias = ['logo24']
_0x4e5863.category = 'textpro'
_0x4e5863.react = '\uD83C\uDFA1'
_0x4e5863.desc = 'Some text to image feature with various styles.'
cmd(_0x4e5863, async (_0x130b8a, _0xe9b766, _0x20fb95) => {
  if (!_0x20fb95) {
    return _0xe9b766.reply('_Need text._')
  }
  var _0xa08171 = await text_pro.one_text_create(
      'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html',
      _0x20fb95
    ),
    _0x728963 = { url: _0xa08171.url },
    _0x1383cd = {
      image: _0x728963,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x130b8a.sendMessage(_0xe9b766.chat, _0x1383cd, { quoted: _0xe9b766 })
})
var _0x50cc1c = {}
_0x50cc1c.pattern = 'discovery'
_0x50cc1c.alias = ['logo25']
_0x50cc1c.category = 'textpro'
_0x50cc1c.react = '\uD83C\uDFA1'
_0x50cc1c.desc = 'Some text to image feature with various styles.'
cmd(_0x50cc1c, async (_0x6afedb, _0xc38c18, _0x563b92) => {
  if (!_0x563b92) {
    return _0xc38c18.reply('_Need text._')
  }
  var _0x29019a = await text_pro.one_text_create(
      'https://textpro.me/create-space-text-effects-online-free-1042.html',
      _0x563b92
    ),
    _0x43514d = { url: _0x29019a.url },
    _0x25d856 = {
      image: _0x43514d,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x6afedb.sendMessage(_0xc38c18.chat, _0x25d856, { quoted: _0xc38c18 })
})
var _0x14549f = {}
_0x14549f.pattern = 'christmas'
_0x14549f.alias = ['logo26']
_0x14549f.category = 'textpro'
_0x14549f.react = '\uD83C\uDFA1'
_0x14549f.desc = 'Some text to image feature with various styles.'
cmd(_0x14549f, async (_0x35314f, _0x524e97, _0xef8d2a) => {
  if (!_0xef8d2a) {
    return _0x524e97.reply('_Need text._')
  }
  var _0x4fec86 = await text_pro.one_text_create(
      'https://textpro.me/christmas-tree-text-effect-online-free-1057.html',
      _0xef8d2a
    ),
    _0x3e69a4 = { url: _0x4fec86.url },
    _0x284979 = {
      image: _0x3e69a4,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x35314f.sendMessage(_0x524e97.chat, _0x284979, { quoted: _0x524e97 })
})
var _0x588ae5 = {}
_0x588ae5.pattern = 'candy'
_0x588ae5.alias = ['logo27']
_0x588ae5.category = 'textpro'
_0x588ae5.react = '\uD83C\uDFA1'
_0x588ae5.desc = 'Some text to image feature with various styles.'
cmd(_0x588ae5, async (_0x4f28fd, _0x38e23b, _0x1a17f6) => {
  if (!_0x1a17f6) {
    return _0x38e23b.reply('_Need text._')
  }
  var _0x5c81aa = await text_pro.one_text_create(
      'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html',
      _0x1a17f6
    ),
    _0x27c3fb = { url: _0x5c81aa.url },
    _0x4efbc6 = {
      image: _0x27c3fb,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4f28fd.sendMessage(_0x38e23b.chat, _0x4efbc6, { quoted: _0x38e23b })
})
var _0x5445b2 = {}
_0x5445b2.pattern = '1917'
_0x5445b2.alias = ['logo28']
_0x5445b2.category = 'textpro'
_0x5445b2.react = '\uD83C\uDFA1'
_0x5445b2.desc = 'Some text to image feature with various styles.'
cmd(_0x5445b2, async (_0x533d4, _0xe609f0, _0x308b1f) => {
  if (!_0x308b1f) {
    return _0xe609f0.reply('_Need text._')
  }
  var _0xa1f5e5 = await text_pro.one_text_create(
      'https://textpro.me/1917-style-text-effect-online-980.html',
      _0x308b1f
    ),
    _0x3e52d5 = { url: _0xa1f5e5.url },
    _0x1e4c0c = {
      image: _0x3e52d5,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x533d4.sendMessage(_0xe609f0.chat, _0x1e4c0c, { quoted: _0xe609f0 })
})
var _0x3af7e4 = {}
_0x3af7e4.pattern = 'blackpink'
_0x3af7e4.alias = ['logo29']
_0x3af7e4.category = 'textpro'
_0x3af7e4.react = '\uD83C\uDFA1'
_0x3af7e4.desc = 'Some text to image feature with various styles.'
cmd(_0x3af7e4, async (_0x4b0cbf, _0x143ecc, _0x372158) => {
  var _0x5db066 = await text_pro.one_text_create(
      'https://textpro.me/create-blackpink-logo-style-online-1001.html',
      _0x372158
    ),
    _0x4341a3 = { url: _0x5db066 },
    _0x3b1e76 = {
      image: _0x4341a3,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4b0cbf.sendMessage(_0x143ecc.chat, _0x3b1e76, { quoted: _0x143ecc })
})
var _0xb97e0f = {}
_0xb97e0f.pattern = 'pubg'
_0xb97e0f.alias = ['logo30']
_0xb97e0f.desc = 'pubg logo'
_0xb97e0f.react = '\uD83C\uDFA1'
_0xb97e0f.category = 'logo'
cmd(_0xb97e0f, async (_0x41c5c9, _0x3b8ba7, _0xa28a67) => {
  if (!_0xa28a67) {
    return
  }
  var _0xf7c374 = {
      url:
        'https://darkalphaxteam-api.cyclic.app/api/photooxy/pubg-mobile?text=FREE%20FIRE%20PLAYER&text2=' +
        _0xa28a67 +
        '&apikey=prabath',
    },
    _0x35b35c = {
      image: _0xf7c374,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x41c5c9.sendMessage(_0x3b8ba7.chat, _0x35b35c, { quoted: _0x3b8ba7 })
})
var _0x756450 = {}
_0x756450.pattern = 'slice'
_0x756450.alias = ['logo31']
_0x756450.category = 'textpro'
_0x756450.react = '\uD83C\uDFA1'
_0x756450.desc = 'Some text to image feature with various styles.'
cmd(_0x756450, async (_0x44c9e2, _0x3b3523, _0x12b6db) => {
  if (!_0x12b6db) {
    return _0x3b3523.reply('*_Example : .slice mr kalindu_*')
  }
  var _0x14d116 = await text_pro.one_text_create(
      'https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html',
      _0x12b6db
    ),
    _0x3a7ba3 = { url: _0x14d116.url },
    _0x1c662c = {
      image: _0x3a7ba3,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x44c9e2.sendMessage(_0x3b3523.chat, _0x1c662c, { quoted: _0x3b3523 })
})
var _0x5cdfef = {}
_0x5cdfef.pattern = 'glow'
_0x5cdfef.alias = ['logo32']
_0x5cdfef.category = 'textpro'
_0x5cdfef.react = '\uD83C\uDFA1'
_0x5cdfef.desc = 'Some text to image feature with various styles.'
cmd(_0x5cdfef, async (_0x8fca37, _0x2342e2, _0x365689) => {
  if (!_0x365689) {
    return _0x2342e2.reply('*_Example : .glow mr kalindu_*')
  }
  var _0x3ca433 = await text_pro.one_text_create(
      'https://textpro.me/free-advanced-glow-text-effect-873.html',
      _0x365689
    ),
    _0x4c0c56 = { url: _0x3ca433.url },
    _0x31d839 = {
      image: _0x4c0c56,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x8fca37.sendMessage(_0x2342e2.chat, _0x31d839, { quoted: _0x2342e2 })
})
var _0x10e6c8 = {}
_0x10e6c8.pattern = 'avenger'
_0x10e6c8.alias = ['logo33']
_0x10e6c8.category = 'textpro'
_0x10e6c8.react = '\uD83C\uDFA1'
_0x10e6c8.desc = 'Some text to image feature with various styles.'
cmd(_0x10e6c8, async (_0x4da0b8, _0x1d7ddc, _0x3b2cba) => {
  if (!_0x3b2cba) {
    return _0x1d7ddc.reply('*_Example : .avenger mr|kalindu_*')
  }
  let _0x3f0f16 = _0x3b2cba ? _0x3b2cba.split('|')[0] : '',
    _0x23228a = _0x3b2cba ? _0x3b2cba.split('|')[1] : ''
  if (!_0x23228a || !_0x3f0f16) {
    return await _0x1d7ddc.reply(
      '*Uhh Please Provide text. Example: .avenger text1|text2*'
    )
  }
  var _0x2f45ef = await text_pro.double_text_create(
      'https://textpro.me/create-3d-avengers-logo-online-974.html',
      _0x3f0f16,
      _0x23228a
    ),
    _0x19d76a = { url: _0x2f45ef.url },
    _0x287ac0 = {
      image: _0x19d76a,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x4da0b8.sendMessage(_0x1d7ddc.chat, _0x287ac0, { quoted: _0x1d7ddc })
})
var _0x519bc5 = {}
_0x519bc5.pattern = 'marvel'
_0x519bc5.alias = ['logo34']
_0x519bc5.category = 'textpro'
_0x519bc5.react = '\uD83C\uDFA1'
_0x519bc5.desc = 'Some text to image feature with various styles.'
cmd(_0x519bc5, async (_0x49bd37, _0x5df0ee, _0x14487f) => {
  if (!_0x14487f) {
    return _0x5df0ee.reply('*_Example : .marvel mr|kalindu_*')
  }
  let _0x341020 = _0x14487f ? _0x14487f.split('|')[0] : '',
    _0x10454e = _0x14487f ? _0x14487f.split('|')[1] : ''
  if (!_0x10454e || !_0x341020) {
    return await _0x5df0ee.reply(
      '*Uhh Please Provide text. Example: .marvel text1|text2*'
    )
  }
  var _0x2696fd = await text_pro.double_text_create(
      'https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html',
      _0x341020,
      _0x10454e
    ),
    _0x2a5c3f = { url: _0x2696fd.url },
    _0xa4cc81 = {
      image: _0x2a5c3f,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x49bd37.sendMessage(_0x5df0ee.chat, _0xa4cc81, { quoted: _0x5df0ee })
})
var _0x541ca2 = {}
_0x541ca2.pattern = 'phub'
_0x541ca2.alias = ['logo35']
_0x541ca2.category = 'textpro'
_0x541ca2.react = '\uD83C\uDFA1'
_0x541ca2.desc = 'Some text to image feature with various styles.'
cmd(_0x541ca2, async (_0x55bd48, _0x51192f, _0x2d4ed0) => {
  if (!_0x2d4ed0) {
    return _0x51192f.reply('*_Example : .phub mr|kalindu_*')
  }
  let _0x58c28e = _0x2d4ed0 ? _0x2d4ed0.split('|')[0] : '',
    _0x1d65c0 = _0x2d4ed0 ? _0x2d4ed0.split('|')[1] : ''
  if (!_0x1d65c0 || !_0x58c28e) {
    return await _0x51192f.reply(
      '*Uhh Please Provide text. Example: .phub text1|text2*'
    )
  }
  var _0x581392 = await text_pro.double_text_create(
      'https://textpro.me/pornhub-style-logo-online-generator-free-977.html',
      _0x58c28e,
      _0x1d65c0
    ),
    _0x1f98a9 = { url: _0x581392.url },
    _0x6ad8be = {
      image: _0x1f98a9,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x55bd48.sendMessage(_0x51192f.chat, _0x6ad8be, { quoted: _0x51192f })
})
var _0x4ffda5 = {}
_0x4ffda5.pattern = 'glitch2'
_0x4ffda5.alias = ['logo36']
_0x4ffda5.category = 'textpro'
_0x4ffda5.react = '\uD83C\uDFA1'
_0x4ffda5.desc = 'Some text to image feature with various styles.'
cmd(_0x4ffda5, async (_0x2c91b4, _0x1023ab, _0x215d0b) => {
  if (!_0x215d0b) {
    return _0x1023ab.reply('*_Example : .glitch dragon|ameesha_*')
  }
  let _0x3e4eaa = _0x215d0b ? _0x215d0b.split('|')[0] : '',
    _0x1425ea = _0x215d0b ? _0x215d0b.split('|')[1] : ''
  if (!_0x1425ea || !_0x3e4eaa) {
    return await _0x1023ab.reply(
      '*Uhh Please Provide text. Example: .glitch2 text1|text2*'
    )
  }
  var _0x1fbb7d = await text_pro.double_text_create(
      'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html',
      _0x3e4eaa,
      _0x1425ea
    ),
    _0x2f3a6a = { url: _0x1fbb7d.url },
    _0x2e5861 = {
      image: _0x2f3a6a,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x2c91b4.sendMessage(_0x1023ab.chat, _0x2e5861, { quoted: _0x1023ab })
})
var _0x19fbaf = {}
_0x19fbaf.pattern = 'glitch3'
_0x19fbaf.alias = ['logo37']
_0x19fbaf.category = 'textpro'
_0x19fbaf.react = '\uD83C\uDFA1'
_0x19fbaf.desc = 'Some text to image feature with various styles.'
cmd(_0x19fbaf, async (_0xb123a7, _0x373b55, _0x3f1ec8) => {
  if (!_0x3f1ec8) {
    return _0x373b55.reply('*_Example : .glitch2 mr|kalindu_*')
  }
  let _0x5e253f = _0x3f1ec8 ? _0x3f1ec8.split('|')[0] : '',
    _0xc04d42 = _0x3f1ec8 ? _0x3f1ec8.split('|')[1] : ''
  if (!_0xc04d42 || !_0x5e253f) {
    return await _0x373b55.reply(
      '*Uhh Please Provide text. Example: .glitch3 text1|text2*'
    )
  }
  var _0x43ef0c = await text_pro.double_text_create(
      'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html',
      _0x5e253f,
      _0xc04d42
    ),
    _0x12a7c5 = { url: _0x43ef0c.url },
    _0x2bf6f2 = {
      image: _0x12a7c5,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0xb123a7.sendMessage(_0x373b55.chat, _0x2bf6f2, { quoted: _0x373b55 })
})
var _0x48f888 = {}
_0x48f888.pattern = 'grafiti'
_0x48f888.alias = ['logo38']
_0x48f888.category = 'textpro'
_0x48f888.react = '\uD83C\uDFA1'
_0x48f888.desc = 'Some text to image feature with various styles.'
cmd(_0x48f888, async (_0x3feff4, _0x501c1c, _0x2df9bf) => {
  if (!_0x2df9bf) {
    return _0x501c1c.reply('*_Example : .grafiti mr|kalindu_*')
  }
  let _0x55335a = _0x2df9bf ? _0x2df9bf.split('|')[0] : '',
    _0x2303bc = _0x2df9bf ? _0x2df9bf.split('|')[1] : ''
  if (!_0x2303bc || !_0x55335a) {
    return await _0x501c1c.reply(
      '*Uhh Please Provide text. Example: .grafiti text1|text2*'
    )
  }
  var _0x587e9b = await text_pro.double_text_create(
      'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html',
      _0x55335a,
      _0x2303bc
    ),
    _0x204c19 = { url: _0x587e9b.url },
    _0x1a253f = {
      image: _0x204c19,
      caption: '*ᴍᴀᴅᴇ ʙʏ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ \uD83C\uDF61*',
    }
  _0x3feff4.sendMessage(_0x501c1c.chat, _0x1a253f, { quoted: _0x501c1c })
})
function _0x11c0b0(_0x53a463) {
  function _0x3fd6a5(_0x4d502) {
    if (typeof _0x4d502 === 'string') {
      return function (_0x424c9f) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x4d502 / _0x4d502).length !== 1 || _0x4d502 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x3fd6a5(++_0x4d502)
  }
  try {
    if (_0x53a463) {
      return _0x3fd6a5
    } else {
      _0x3fd6a5(0)
    }
  } catch (_0x5b0013) {}
}
