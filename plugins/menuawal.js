let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === '.menu' || m.text.toLowerCase() === '.help' || m.text.toLowerCase() === 'menu') {
 (async() => {
const arr = [
  "𝖡𝖾𝗇𝗍𝖺𝗋𝗋 𝖫𝗈𝖺𝖽𝗂𝗇𝗀.....",
  "𝖣𝗂𝗄𝗂𝗍 𝖫𝖺𝗀𝗂𝗂.....",
  "𝟥",
  "𝟤",
  "𝟣",
  "┏━ 『𝙸𝙽𝙵𝙾 𝙱𝙾𝚃』━⬤\n┃◈ ɴᴀᴍᴇ : *𝙑𝙮𝙡𝙖𝙖𝙙𝙚𝙨𝙨*\n┃◈ ᴘʀᴇᴍɪᴜᴍ : *ᴘʀᴇᴍɪᴜᴍ*\n┃◈ ʀᴜɴ : *ᴘᴀɴᴇʟ*\n┃◈ ʟɪᴍɪᴛ : *ɴᴏ ʟɪᴍɪᴛ*\n┃◈ ʟɪʙʀᴀʀʏ : *ɴᴏᴅᴇᴊs*\n┗━━━━━⬤\nᴜɴᴛᴜᴋ ᴍᴇᴍᴜɴᴄᴜʟᴋᴀɴ sᴇᴍᴜᴀ ғɪᴛᴜʀ ᴋᴇᴛɪᴋ  『 *.allmenu* 』\nᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛɴʏᴀᴀ,\nᴠʏʟᴀᴀᴅᴇss ᴀᴋᴀɴ ʙʟᴏᴋɪʀ ɴᴏᴍᴏʀ ᴋᴀᴍᴜ ɴɴᴛɪɪ"
];

const { key } = await conn.sendMessage(m.chat, { text: '𝖭𝗒𝖺𝗋𝗂 𝖬𝖾𝗇𝗎?' }, { quoted: m});

for (let i = 0; i < arr.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 700));
  await conn.sendMessage(m.chat, { text: arr[i], edit: key });
}})()

   }
}

export default handler