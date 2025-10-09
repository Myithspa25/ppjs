import {PixelPlace, AuthFile} from "pixelplacejs-new";


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
    for (let i=1; i<20; i++){
        console.log(`Drawing image /${Math.floor((i-1)/4)+1}/mario${i}.png`);
        await bot.drawImage({
                    x: 0,
                    y: (i*15)+906,
                    path: `/home/myithspa/Documents/images/mario/${Math.floor((i-1)/4)+1}/mario${i}.png`,
        })
    }
})();