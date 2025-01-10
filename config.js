const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6283104268179@s.whatsapp.net"]
global.nomerOwner = "6283104268179"
global.nomorOwner = ['6283104268179']
global.namaDeveloper = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" //jangn diubh bng
global.namaOwner = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲"
global.namaBot = "𝐀𝐠𝐥𝐞𝐫 𝐅𝐨𝐫𝐠𝐞𝐫"
global.versionBot = "𝟏𝟒.𝟎.𝟎"
global.packname = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲"
global.author = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲"
global.thumb = fs.readFileSync("./AndraZyy.png")
global.ThM = 'https://img101.pixhost.to/images/365/551580177_skyzopedia.jpg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})