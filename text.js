import { PixelPlace, Modes, Packets, Color, PPError, AuthFile, Font,} from "pixelplacejs-new";

(async () => {
    const params = [
        {
            authData: AuthFile.from("9qyhm"),
            boardID: 7,
        }
    ];

    const pp = new PixelPlace(params);
    await pp.Init();

    const bot = pp.bots[0];
    console.log("Pixel Place initiated!");

    await bot.drawText({
        x: 1925,
        y: 500,
        text: "Jarvis, join REKO guild",
        textColor: Color.BLACK
    });
})();