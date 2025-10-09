import { PixelPlace, Color, AuthFile} from "pixelplacejs-new";

(async () => {
    const params = [
        {
            authData: AuthFile.from("9qyhm"),
            boardID: 97976,
        }
    ];

    const pp = new PixelPlace(params);
    await pp.Init();

    const bot = pp.bots[0];
    console.log("Pixel Place initiated!");

    await bot.drawText({
        x: 0,
        y: 0,
        text: "Rules:\n*Have fun\n(More rules coming soon)",
        textColor: Color.BLACK,
        backgroundColor: Color.WHITE
    });
})();