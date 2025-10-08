import { PixelPlace, Packets, Color, PPError, AuthFile, Font, Modes} from "pixelplacejs-new";


(async () => {
    const params = [
        {
            authData: AuthFile.from("9qyhm"),
            boardID: 9,
        }
    ];

    const pp = new PixelPlace(params);
    await pp.Init();

    const bot = pp.bots[0];
    console.log("Pixel Place initiated!");
    
    
    await bot.drawImage({
        x: 0,
        y: 0,
        path: "/home/myithspa/Documents/images/random or unsorted/roaring-moon.png",
        protect: true,
        mode: Modes.RAND
    })
})();
