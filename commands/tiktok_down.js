const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 36000 // 300 min
var dlsize = 1000 // 1000mb



cmd(
    {
        pattern: "tiktok",
        react: "🌟",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("Please provide a valid URL.");
                return;
            }

            const tiktok = await fetchJson(`https://kaveesha-sithum.onrender.com/tiktok?url=${text}`);

            if (!tiktok.result || !tiktok.result.video) {
                citel.reply("Failed to fetch video URL ");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: tiktok.result.video },
                    mimetype: "video/mp4",
                    caption: tiktok.result. title
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
