import {PixelPlace, AuthFile, Modes} from "pixelplacejs-new"


(async () => {
    const params = [
        {
            authData: AuthFile.from("9qyhm"),
            boardID: 7,
        }
    ]

    const pp = new PixelPlace(params)
    await pp.Init()

    const bot = pp.bots[0]
    console.log("Pixel Place initiated!")
    bot.setPlacementSpeed(12)
    let frame = 0
    while (true){
        await bot.drawImage({
            x: 1245,
            y: 1650,
            path: `/home/myithspa/Documents/images/random or unsorted/fireko/frame_${frame}.gif`,
            mode: Modes.BOTTOM_LEFT_TO_RIGHT
        })
        frame = (frame + 1) % 5
    }
})()
