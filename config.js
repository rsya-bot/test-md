/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6281319944917','6281319944917','6281319944917']
global.packname = 'Jojo - Bot'
global.author = '@sofunsyabi.id'
global.sessionName = 'session'
global.prefa = ['','!','.','/','#','@','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    admin: '*[ FITUR INI KHUSUS ADMIN]*',
    botAdmin: '*[ JADIKAN BOT SEBAGAI ADMIN* ]*',
    owner: '*[ FITUR INI KHUSUS OWNER ]*',
    group: '*[ GROUP ONLY ]*',
    private: '*[ PRIVATE CHAT ONLY ]*',
    bot: '*[ KHUSUS USER BO&]*',
    wait: 'Wait A Minute',
}
global.thumb = fs.readFileSync('./lib/sel.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
