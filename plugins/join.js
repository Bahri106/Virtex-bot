let handler = async (m, { conn }) => {
let info = `
*${htki} JOIN ${htka}*
          
   🌍Bot Nggak Gratis
`
const sections = [
   {
    title: `✃ INFO`,
	rows: [
	    {title: "💸Sewa Bot", rowId: '.sewa', description: 'Sewa Bot' },
	    {title: "👤Owner Bot", rowId: '.owner', description: 'Pemilik Fangz BOT' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "🌹FANGZ BOT",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['join']
handler.tags = ['info']
handler.command = /^(join)$/i

export default handler