import {PixelPlace, AuthFile} from "pixelplacejs-new";


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
    for (let y = 0; y < 2087; y++)
        for (let x = 0; x < 2499; x++)
            if (bot.isPixelInAnyWarZone(x, y) && bot.getRegionAt(x, y).canBot) {
                await bot.placePixel({
                    x: x,
                    y: y,
                    col: Color.WHITE
                });
            }
})();
