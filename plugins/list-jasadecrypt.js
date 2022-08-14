let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *LIST* 」
│━━━━ Nego? Chat pribadi
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga Decrypt Fitur Bot:*
│• 1 Fitur / 7k
│• ╰► +1 Fitur? +5k
│
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💬Chat', url: 'https://wa.me/6288215689772?text=📑Bang+mau+beli+jasa+decrypt+fitur'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^jasadecrypt$/i

export default handler