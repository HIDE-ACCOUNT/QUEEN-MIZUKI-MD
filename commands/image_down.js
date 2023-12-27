const moment = require('moment-timezone')
const {fetchJson,cmd, tlang, getBuffer, prefix, Config } = require('../lib')
let gis ='' // require("g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')


cmd({
            pattern: "image",
            alias: ["img" , "pic"],
            category: "search",
            desc: "Searches Image on Google",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

   if (!text) return citel.reply(`Provide me a query!\n*Ex : .image luffy |10*`)
   let buttonMessage = {}
   let name1 = text.split("|")[0] || `Luffy`
   let name2 = text.split("|")[1] || `5`
 try {
    let urlsArray = [];
    const params = {
        q: name1, 
        tbm: "isch",
        hl: "en",
        gl: "in",
        ijn: "0", 
    };
    const headers = {
      "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
      "Accept-Encoding": "application/json",
  };
  
    const res = await axios.get("https://www.google.com/search", { headers: headers, params: params });
    let body = res.data;
    body = body.slice(body.lastIndexOf("AF_initDataCallback"));
    body = body.slice(body.indexOf("["));
    body = body.slice(0, body.indexOf("</script>")-1);
    body = body.slice(0, body.lastIndexOf(","));
    
    const img = JSON.parse(body);

    const imgObjects = img[56][1][0][0][1][0];
    for (let i = 0; i < name2; i++) {
        if (imgObjects[i] && imgObjects[i][0][0]["444383007"][1]) {
            let url = imgObjects[i][0][0]["444383007"][1][3][0]; // the url
            urlsArray.push(url);
        }
    }

for (let url of urlsArray) { Void.sendMessage(citel.chat , {image : {url : url} } )  }
} 
 catch (error) {   return citel.reply("*Google Images Not Working, Try it Later*"); }

 
 
 /*
 
let isImages = false;
            let num = text.split("|")[1];
 gis(name1, async(error, result) => { 
if(result.length) 
{
 isImages = true;
 citel.reply(`Sending images of ${name1} in chat`) 
}
else return citel.reply("*Google Images Not Working, Try it Later*");
})
     if(!isImages) return       
            let nn = name2
            for (let i = 0; i < nn; i++) {
            gis(name1, async(error, result) => { 
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            
             
             if(!num){ buttonMessage = {   image: { url: images },
                                caption: Config.caption,
                                }
             }else {  buttonMessage = {   image: { url: images },}   }
                    
             
             Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
                })
            }
            
            
            */
 })
