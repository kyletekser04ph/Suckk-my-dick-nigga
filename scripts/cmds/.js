module.exports = {
    config: {
        name: "none",
        version: "1.0",
        author: "kylepogi",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
    onStart: async function() {}, 
    onChat: async function({ event, message }) {
        if (event.body && event.body.toLowerCase() === "×") {
            // Replace this placeholder with actual totalTimeInSeconds if needed
            const totalTimeInSeconds = 0; // Example placeholder

            return message.reply(`   === 「 𝘽𝙊𝙏 𝙋𝙍𝙀𝙁𝙄𝙓 」  ===\n
--❖-- 𝗞𝗬𝗟𝗘𝗭𝗘𝗡𝗣𝗔𝗜 𝗩𝟮 (✷‿✷) --❖--
▬▬▬▬▬▬▬▬▬▬▬▬
[⁉️]-𝙷𝙾𝚆 𝚃𝙾 𝚄𝚂𝙴𝙳?? 
𝘁𝘆𝗽𝗲: ×help, to see my
available commands 
𝘁𝘆𝗽𝗲: ×callad, to message
my admin/creator
𝘁𝘆𝗽𝗲: owner or ×owner, 
to see my owner information:) 
▬▬▬▬▬▬▬▬▬▬▬▬

𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗞𝘆𝗹𝗲(✷‿✷)\n\n𝗣𝗿𝗼𝗰𝗲𝘀𝘀 𝗧𝗶𝗺𝗲: ${totalTimeInSeconds.toFixed(2)} 𝘀𝗲𝗰𝗼𝗻𝗱𝘀`);
        }
    }
};
