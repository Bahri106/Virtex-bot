let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *LIST* 」
│━━━━ Nego? Chat pribadi
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga jasa run Termux :*
│• 5K / (3 Hari)
│• 10K / (1 Minggu)
│• 25K /  (1 Bulan)
│• 2k (1 Hari)
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💬Chat', url: 'https://wa.me/6288215689772?text=📑Bang+mau+jasa+run+termux'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^jasatermux$/i

export default handler