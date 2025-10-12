import {PixelPlace, AuthFile} from "pixelplacejs-new";
import fs from 'fs';

let chars = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];





(async () => {
    const params = [
        {
            authData: AuthFile.from("9qyhm"),
            boardID: 98022,
        }
    ];

    const pp = new PixelPlace(params);
    await pp.Init();

    const bot = pp.bots[0];
    console.log("Pixel Place initiated!");

    //let text = "I love renko.";
    let text = fs.readFileSync('./text.txt', 'utf8');
    let i = 0;
    let j = 1
    let x = 0;
    let y = 0;
    const str = stringToNumbers(text);
    //await bot.drawRect({
    //    x: 0,
    //    y: 0,
    //    width: 300,
    //    height: 8,
    //    color: Color.WHITE
    //});
    for (i = 0; i < str.length; i++) {
        await bot.placePixel({
            x: x,
            y: y,
            col: str[i],
        });
        x++;
        if (x == bot.canvasWidth + 1) {
            x = 0;
            y += 1;
        };
    }
})();

function stringToNumbers(str) {
    let base64mode = false;
    if (base64mode) {
        str = Buffer.from(str).toString('base64');
    };
    return str
        .split("")
        .map(char => {
        let code = chars.indexOf(char);
        if (code == -1) return base64mode ? 0 : 63;
        return code;
        });
}