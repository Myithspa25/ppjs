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
    const time = new Date().getTime();
    console.log("Pixel Place initiated!");

    await bot.drawImage({
        x: 931,
        y: 678,
        path: "/home/myithspa/Downloads/PPJS/images/7/transisland.png",
        protect: true
    })
    const startTime = Date.now();
    //while (true) {
    //    await bot.drawText({
    //        x: 934,
    //        y: 688,
    //        text: "Running     for\n\n\n\n    seconds",
    //        protect: true
    //    });
    //    await bot.drawText({
    //        x: 938,
    //        y: 702,
    //        backgroundColor: Color.WHITE,
    //        text: (Math.floor((Date.now()-startTime)/1000)).toString(),
    //        protect: true
    //    });
    //};
})();
