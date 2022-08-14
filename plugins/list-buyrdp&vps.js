let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *LIST* 」
│━━━━ Nego? Chat pribadi
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga Rdp & Vps :*
│• Spesifikasi Detail? Chat
│• ╰► Chat Di bawah ini
│• 
│
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💬Chat', url: 'https://wa.me/6281297084552?text=📑Bang+mau+beli+rdp'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^belirdp$/i

export default handler