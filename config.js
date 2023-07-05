const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6283877118785@s.whatsapp.net"] // ISI NOMOR MU
global.nomerOwner = "6283877118785"//ISI NOMOR MU
global.nomorOwner = ['6283877118785']//ISI NOMOR MU
global.namaDeveloper = "Kii MD"
global.namaBot = "XyraBotz"
global.packname = ""
global.author = "Sticker By Kii MD"
global.thumb = fs.readFileSync("./thumb.jpg")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh Dayy & Sanzz
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/