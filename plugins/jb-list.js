let handler = async (m, { conn }) => {
let info = `
*${htki} STORE ${htka}*
          
*📦 Kalau mau dapat discon cek website TokoBot*
Link: https://toko.ly/TokoBot

–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja.. max tawar 5k

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `✃ LIST`,
	rows: [
	    {title: "🛍️Jasa Up Github", rowId: '.jasaup', description: 'Upload File Ke github' },
	    {title: "🛍️Jasa run Via Rdp", rowId: '.jasarun', description: 'Mau Run tapi gabisa?' },
	{title: "🛍️Jasa run Via Termux", rowId: '.jasatermux', description: 'Mau run Di termux?' },
	{title: "🛍️Jasa Tambah Fitur", rowId: '.fiturjasa', description: 'Mau fitur apa nich?' },
	{title: "🛍Jasa Link", rowId: '.jasalink', description: 'Buat Link yuk' },
	{title: "🛍Jasa Encrypt Fitur️", rowId: '.jasaenc', description: 'Cie Mau encrypt Fitur tuh :v' },
	{title: "🛍Jasa Decrypt Fitur️", rowId: '.jasadecrypt', description: 'Waduh bahaya nih :v' },
	{title: "🛍Rdp & Vps", rowId: '.belirdp', description: 'By ByuOfc Murah.' },
	{title: "🛍Diamond Free Fire", rowId: '.listff', description: 'Diamond Free Fire' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🗃️Event", rowId: '.event', description: 'Event Fangz BOT' },
	    {title: "🌸Sewa Bot", rowId: '.sewa', description: 'Mau sewa Bot nya?' },
	{title: "📦Topup", rowId: '.diskon', description: 'Website Topup nih' },
	{title: "🎀YT Bot", rowId: '.ytbot', description: 'Youtube Bot' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "📊 Discount", rowId: '.diskon', description: 'Discount Pembayaran' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "🛒ʙ ᴜ ʏ",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['storebot']
handler.tags = ['store']
handler.command = /^storebot$/i

export default handler