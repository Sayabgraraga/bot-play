/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285936162097', 'haris', true],
  ['6285936162097']
] // Nomor Owner

global.mods = [''] 
global.prems = ['6285936162097', '6285936162097']

// apikey
global.lann = '767ZjsID'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'jTs35hrM': 'jTs35hrM',
  '767ZjsID': ''
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'jTs35hrM',
  lann: '767ZjsID'
}

// Watermark
global.nama = 'haris' // nama owner
global.nomor = '6285936162097' // nomor owner
global.nans = 'anime-MD' // nama bot 
global.thumb = 'https://telegra.ph/file/f822b042d986feafbad4e.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/D7x50SjM8QyDYZuwCNOZmI' // link group yang ada di menu

// Sticker wm
global.packname = 'anime-MD┃ᴮᴼᵀ' 
global.author = '@nipgx' 
global.fgig = 'soon' // bebas tapi jangan kosong 
global.fgsc = 'soon' // bebas tapi jangan kosong
global.fgyt = 'soon' // bebas tapi jangan kosong
global.fgpyp = 'soon' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6285331121661'
global.qris = 'soon'
global.web = 'soon'
global.email = 'oke'
global.lastm = 'iya puh'

global.wait = 'Tunggu sebentar....'
global.rwait = '🕒'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})