import { PixelPlace, AuthFile, Modes} from "pixelplacejs-new";


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

    await bot.drawImage({
        x: 1113,
        y: 1811,
        path: "/home/myithspa/Downloads/PPJS/images/7/guild.png",
        protect: true,
        mode: Modes.RAND
    })
    while (true) {
        await bot.drawOutline({
            x: 1113,
            y: 1811,
            width: 100,
            height: 100,
            color: Math.floor(Math.random() * 64)
        })
    }
})();
