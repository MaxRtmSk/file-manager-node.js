import fs from "node:fs/promises"
import { stdout, stdin } from "node:process";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";  

const transform = async () => {
    await pipeline(stdin, reverseTransformStream, stdout); 
};

const reverseTransformStream = new Transform({
  transform(chunk, encoding, callback){
    return callback(null, String(chunk).split("").reverse().join(""))
  }
})

await transform();
