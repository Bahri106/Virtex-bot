let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *LIST* 」
│━━━━
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga jasa Link :*
│• Saweria / 1k. 1link
│• Google Drive / 500p. 1link
│• MediaFire /  1k. 1link
│• Advertise / 2k. 1link
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💬Chat', url: 'https://wa.me/6288215689772?text=📑Bang+mau+jasa+run+rdp'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^jasalink$/i

export default handler