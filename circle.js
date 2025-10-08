import { PixelPlace, Modes, Packets, Color, PPError, AuthFile, Font } from "pixelplacejs-new";

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

    let x=0;
    let y=0;
    for (y=0; y<100; y++) {
        for (x=0; x<100; x++) {
            await bot.placePixel({
                x: x+1217,
                y: y+1614,
                col: Math.round(Math.sqrt((x-50)**2 + (y-50)**2))
            });
        }
    }
})();
