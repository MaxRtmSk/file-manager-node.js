import fs from "node:fs"
import fsPromises from "node:fs/promises"
import path from "path";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib"
import { state } from "../state.js";

export const decompress = async (...params) => {
   const [compressFile, pathFileDesination] = params; 

   const unzip = createGunzip()

   const compressFilePath = path.join(state.directory, compressFile.trim());
   const destinationFile = path.join(state.directory, pathFileDesination.trim(), path.basename(compressFile, '.gz'));

   const file = (await fsPromises.open(compressFilePath)).createReadStream();
   const destination = fs.createWriteStream(destinationFile);

   await pipeline(file, unzip, destination)
};
