import { PixelPlace, Modes, Packets, Color, PPError, AuthFile, Font } from "pixelplacejs-new";

(async () => {
    const params = [
        {
            authData: AuthFile.from("9qyhm"),
            boardID: 80988,
        }
    ];

    const pp = new PixelPlace(params);
    await pp.Init();
    let messageLog = [];
    const bot = pp.bots[0];
    const time = new Date().getTime();
    console.log("Pixel Place initiated!");
    await bot.drawRect({
        x: 1,
        y: 1,
        width: 78,
        height: 78,
        color: Color.WHITE
    });
    await bot.drawOutline({
        x: 0,
        y: 0,
        width: 80,
        height: 80,
        color: Color.BLACK

    });
    console.log("Beginning listener")


    bot.on(Packets.RECEIVED.CHAT_MESSAGE, async (msg) => {
        if ((msg.channel === "painting" || msg.channel === "whispers") && !msg.message.startsWith(";")) {
            console.log(`${msg.username}: ${msg.message}`);
            messageLog.push(`${msg.username}: ${msg.message}`.match(/(.{1,20})(?:\s+|$)/g).join("\n"));
            if (messageLog.length > 3) {
                messageLog.shift();
                await clearChat();
                await drawChat();
            }
            await drawChat();
        }  
    });

    async function drawChat() {
        await bot.drawText({
                x: 2,
                y: 2,
                text: messageLog.join("\n"),
                color: Color.BLACK,
                backgroundColor: Color.WHITE
        });
    };
    async function clearChat() {
        await bot.drawRect({
            x: 1,
            y: 1,
            width: 78,
            height: 78,
            color: Color.WHITE
        });
    }
})();
