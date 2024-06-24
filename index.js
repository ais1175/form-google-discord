function onSubmit(resolve) {
    let discord_webhook = '' //Your discord webhook
    let discord_embed = {
        embeds: [{
            type: 'rich', // ห้ามเปลี่ยน
            title: 'New app!', ///นี่จะเป็นชื่อ
            color: '00000', //นี่จะเป็นสีที่ค่าเริ่มต้นเป็นสีดำ
            description: `มีการส่งการตอบกลับแบบฟอร์มใหม่ด้านล่างนี้เป็นคำตอบสำหรับคำถามที่คุณมีในแบบฟอร์ม Google.`
        }],
        content: `<%role-id-here> A new form was sumbbited`
    }
    resolve.response.getItemResponses().forEach(function(comeback) {
        let val = comeback.getResponse() || 'None'
        discord_embed.embeds[0].description +=  `\n**${comeback.getItem().getTitle()}**\`\`\`\n${val}\`\`\``
    })
    UrlFetchApp.fetch(discord_webhook, {
        method: 'post',
        payload: JSON.stringify(discord_embed),
        contentType: 'application/json'
    })
}