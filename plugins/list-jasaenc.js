let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *LIST* 」
│━━━━ Nego? Chat pribadi
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga jasa run RDP :*
│• 5K / (3 Hari)
│• 15K / (1 Minggu)
│• 20K /  (1 Bulan)
│• 2k (1 Hari)
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💬Chat', url: 'https://wa.me/6288215689772?text=📑Bang+mau+beli+jasa+enc+fitur'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^jasaenc$/i

export default handler