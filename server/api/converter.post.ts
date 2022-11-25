
import crypto from "node:crypto";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    var obj
    var datax = body.datax
    
    //uint8array from binarystring datax (thanks github copilot??)
    var datay = new Uint8Array(datax.split('').map(function (c: any) { return c.charCodeAt(0); }));
    const encrypted = datay[0] === 69;
    
    if (encrypted) {
        console.log("Decrypting...");

        const decrypt = crypto.createDecipheriv("aes-128-cbc", datay.subarray(1,17), datay.subarray(17,33));
        let decrypted = "";

        decrypt.write(datay.subarray(33));
        decrypt.end();

        var chunk
        while (null !== (chunk = decrypt.read())) {
            decrypted += chunk.toString('utf8');
        }
        obj = JSON.parse(decrypted)
    }
    else {
        obj = JSON.parse(datax.toString())
    }
    const newObj = {
        "OwO": "this save file have been converted!",
        "EnumData": obj.Data
    }
    console.log(newObj)
    
    return JSON.stringify(newObj)

})