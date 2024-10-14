import fs from "node:fs"
import fsPromises from "node:fs/promises"
import path from "path";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib"
import { state } from "../state.js";

export const compress = async (...params) => {
   const [pathToFile, pathFileDesination] = params; 

   const gzip = createGzip()

   const originalFile = path.join(state.directory, pathToFile.trim());
   const destinationFile = path.join(state.directory, pathFileDesination.trim(), path.basename(originalFile) + '.gz');

   const file = (await fsPromises.open(originalFile)).createReadStream();
   const destination = fs.createWriteStream(destinationFile);

   await pipeline(file, gzip, destination); 
};
