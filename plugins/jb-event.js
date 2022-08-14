let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *EVENT*❭❀°━┓
┃
┃> Run Rdp: Diskon
┃
┃> Sewa Bot: Diskon, (1 slot)
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, '6281111111111@s.whatsapp.net', '*Event New*')
}
handler.help = ['event']
handler.tags = ['store']
handler.command = /^(event)$/i

handler.fail = null 

export default handler 

//BELUM JADI