import { PixelPlace, Modes, Packets, Color, PPError, AuthFile, Font} from "pixelplacejs-new";

(async () => {
    const params = [
        {
            authData: AuthFile.from("9qyhm"),
            boardID: 97726,
        }
    ];

    const pp = new PixelPlace(params);
    await pp.Init();

    const bot = pp.bots[0];
    console.log("Pixel Place initiated!");
    
    await bot.drawImage({
        x: 750,
        y: 100,
        path: "/home/myithspa/Downloads/OpenTTD/share/icons/hicolor/256x256/apps/openttd.png",
    });
})();
