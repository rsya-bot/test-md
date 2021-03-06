/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const hx = require('hxz-api');
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const xfar = require('xfarr-api');
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database.json')

// language
const  { ind } = require(`./language`)
lang = ind //language
enter = '\n'

module.exports = hisoka = async (hisoka, m, chatUpdate) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi.test(body) ? body.match(/^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isCreator = [hisoka.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == hisoka.user.id ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const reply = (teks, men) => {
             return hisoka.sendMessage(from, { text: teks, mentions: men ? men : [] }, { quoted: m })
        }
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
// Function
        const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return hisoka.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return hisoka.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return hisoka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return hisoka.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: m })
            }
        }
        switch(command) {
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'tagall': case 'infoall':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
                let tekss = `???????????? *???? Mention All* ????????????\n\n??? *Message : ${q ? q : 'Nothing'}*\n\n`
		      	for (let mem of groupMembers) {
		            tekss += `????????? @${mem.id.split('@')[0]}\n`
				}
                teks += `\n??? *${botname}* ???`
                hisoka.sendMessage(from, { text: tekss, mentions: groupMembers.map(a => a.id) }, { quoted: m })
            break
case 'hidetag':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
                hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
			case 'tiktoknowm':
			  case 'tiktok':
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply("Mana Linknya?")
			    if (!args[1].includes('tiktok')) return reply("berikan link yg valid")
			    reply("Procces")
			    hx.ttdownloader(args[1]).then( data => {
			      hisoka.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
			    }).catch(() => reply("eror"))
			    break
			case 'tiktokaudio':
			    if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('tiktok')) return m.reply(lang.wrongFormat(prefix))
			    reply(mess.wait)
			    hx.ttdownloader(args[1]).then( data => {
			      hisoka.sendMessage(m.chat, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m })
			    }).catch(() => reply("eror"))
		            break
case 'mp4': case 'ytmp4':
                if (!q) return m.reply(lang.wrongFormat(prefix))

                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Youtube(text).then(async (data) => {
                    let txt = `*----??? YOUTUBE VIDEO ???----*\n\n`
                    txt += `*???? Quality :* ${data.medias[1].quality}\n`
                    txt += `*??????? Type :* ${data.medias[1].extension}\n`
                    txt += `*???? Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*???? Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(m.chat, data.thumbnail, txt, m)
                    hisoka.sendMessage(m.chat, {video: {url: data.medias[1].url}})
            	  })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await hisoka.updateProfilePicture(hisoka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Facebook(args[1]).then(async data => {
                    let txt = `*----??? FACEBOOK DOWNLOADER ???----*\n\n`
                    txt += `*???? Title :* ${data.title}\n`
                    txt += `*??????? Type :* ${data.medias[0].extension}\n`
                    txt += `*???? Quality :* ${data.medias[0].quality}\n`
                    txt += `*???? Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*???? Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[0].url,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'mp3': case 'ytmp3':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Youtube(q).then(async (data) => {
                    let txt = `*----??? YOUTUBE AUDIO ???----*\n\n`
                    txt += `*???? Quality :* ${data.medias[7].quality}\n`
                    txt += `*??????? Type :* ${data.medias[7].extension}\n`
                    txt += `*???? Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*???? Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(m.chat, data.thumbnail, txt, m)
                    hisoka.sendMessage(m.chat, {audio: {url: data.medias[7].url}})
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
case 'sc': case 'source':
            m.reply("https://github.com/GetSya\nCari aja Sc nya disitu")
            break
            case 'donasi': case 'donate':
            m.reply("*[ DONASI ]*\n\nDANA : 0813-1994-4917\nGOPAY : 0882-1329-2687\nOVO : 0882-1329-2687")
			break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await hisoka.updateProfilePicture(hisoka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value open/close'
                if (args[0].toLowerCase() === 'close') {
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'open') {
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'sticker': case 'stiker': case 's': case 'stik':
try {
if (!quoted) return m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`STARTED : ${cmd}`)
})
.on('error', function (err) {
console.log(`ERROR : ${err}`)
fs.unlinkSync(media)
})
.on('end', function () {
console.log(`FINISH`)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
        		if (error) return m.reply(lang.err())
hisoka.sendMessage(from, {sticker: fs.readFileSync(`./sticker/${sender}.webp`)}, {quoted: m})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} catch {
m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
}

break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '??? Media Url : '+result }, { quoted: m })
            }
            break
            case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: `??? Title : ${result.title}\n??? Category : ${result.type}\n??? Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: `??? Title : ${result.title}\n??? Category : ${result.type}\n??? Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'wikimedia': {
                m.reply(mess.wait)
                anu = wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: `??? Title : ${result.title}\n??? Source : ${result.source}\n??? Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'porno': case 'porn': case 'bokep': {
                m.reply(mess.wait)
                anu = await porno()
                hisoka.sendMessage(m.chat, { video: { url: 'https://tikporntok.com/'+anu.video }, caption: `??? Title : ${anu.title}\n??? Viewers : ${anu.views}\n??? Tags : ${anu.tags}\n??? Likes : ${anu.like}\n??? Dislikes : ${anu.dislike}\n??? Favourite : ${anu.favorite}\n??? Time Upload : ${anu.upload}\n??? Description : ${anu.desc}\n??? Source : https://tikporntok.com/${anu.source}` }, { quoted: m })
            }
            break
            case 'hentai': {
                m.reply(mess.wait)
                anu = await hentai()
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `??? Title : ${result.title}\n??? Category : ${result.category}\n??? Mimetype : ${result.type}\n??? Views : ${result.views_count}\n??? Shares : ${result.share_count}\n??? Source : ${result.link}\n??? Media Url : ${result.video_1}` }, { quoted: m })
            }
            break
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

???? Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Arasya.;;;'
                    + 'FN:Arasya.\n' // full name
                    + 'ORG:Owner Bot;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281319944917:+62 813-1994-4917\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                hisoka.sendMessage(m.chat, { contacts: { displayName: 'Dika Ardnt.', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
            case 'tes': case 'menu': case 'help': case '?': {
                anu = `
???????????? *Group Menu*
???
?????? ${prefix}linkgroup
?????? ${prefix}ephemeral [option]
?????? ${prefix}setpp
?????? ${prefix}setname [text]
?????? ${prefix}group [option]
?????? ${prefix}add @user
?????? ${prefix}kick @user
?????? ${prefix}promote @user
?????? ${prefix}demote @user
???
???????????????????????????

???????????? *Search Menu*
???
?????? ${prefix}pinterest [query]
?????? ${prefix}wallpaper [query]
?????? ${prefix}wikimedia [query]
???
???????????????????????????

???????????? *Download Menu*
???
?????? ${prefix}tiktoknowm [LinkTiktok]
?????? ${prefix}tiktokaudio [LinkTiktok]
?????? ${prefix}ytmp4 [LinkYt]
?????? ${prefix}ytmp3 [LinkYt]
?????? ${prefix}facebook [Link Fb]
???
???????????????????????????

???????????? *Random Menu*
???
?????? ${prefix}porno
?????? ${prefix}hentai
???
???????????????????????????

???????????? *Convert Menu*
???
?????? ${prefix}toimage
?????? ${prefix}sticker
?????? ${prefix}tovideo
?????? ${prefix}togif
?????? ${prefix}tourl
???
???????????????????????????

???????????? *Main Menu*
???
?????? ${prefix}ping
?????? ${prefix}owner
?????? ${prefix}menu / ${prefix}help / ${prefix}?
?????? ${prefix}delete
?????? ${prefix}donasi
???
???????????????????????????

???????????? *Owner Menu*
???
?????? ${prefix}chat [option]
?????? ${prefix}join [link]
?????? ${prefix}leave
?????? ${prefix}block @user
?????? ${prefix}unblock @user
???
???????????????????????????

*THANKS TO*
- Arasya
- Riyan
- Hisoka

NOTE : *BOT INI MASIH DALAM TAHAP PENGEMBANGAN BETA/MASIH BASIC JADI HARAP BERSABAR JIKA ADA SESUATU FITUR YANG EROR!!!*`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/sel.jpg') }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Rest Api',
                                    url: 'https://docs-jojoapi.herokuapp.com'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 813-1994-4917'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status - Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
