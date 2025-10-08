import { PixelPlace, Packets, Color, PPError, AuthFile, Font, Modes} from "pixelplacejs-new";


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
    while (true){
        await bot.placePixel({
                    x: randInt(931, 1005),
                    y: randInt(678, 731),
                    col: Math.floor(Math.random() * 64)
        })
    }
})();

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}