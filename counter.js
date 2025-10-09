import {PixelPlace, AuthFile} from "pixelplacejs-new";

(async () => {
    const params = [
        {
            authData: AuthFile.from("9qyhm"),
            boardID: 80988,
        }
    ];

    const pp = new PixelPlace(params);
    await pp.Init();

    const bot = pp.bots[0];
    console.log("Pixel Place initiated!");

    let tick = 0;
    while (true) {
        console.log(`${tick}`);
        await bot.drawText({
            x: 0,
            y: 0,
            backgroundColor: Color.WHITE,
            text: tick.toString(),
        });
        tick++;
    }
})();
