let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *LIST* 」
│━━━━ Nego? Chat pribadi
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga jasa up sc ke github :*
│• 1 sc / 10k
│• 2 sc / 15k
│• Bikin Repository / 1k
│• Bikin Token Gh / 1k
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💬Chat', url: 'https://wa.me/6288215689772?text=📑Bang+mau+up+in+ke+github+dong'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^jasaup$/i

export default handler