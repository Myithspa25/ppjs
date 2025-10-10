import {PixelPlace, AuthFile, Modes} from "pixelplacejs-new";

// TODO: fix this
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
    bot.setPlacementSpeed(12)
    for (let x = 0; x < 26; x++) {
        for (let y = 0; y < 21; y++) {
            let posX = (x*100)+50
            let posY = (y*100)+50
            if (bot.getRegionAt(posX, posY).canBot) {
                console.log(`Drawing at ${posX}, ${posY} | ${bot.getRegionAt(posX, posY).name}`);
                await bot.drawImage({
                    x: posX-50,
                    y: posY-50,
                    path: "/home/myithspa/Downloads/PPJS/images/7/guild.png"
                })
            }
        }
    }

})();
