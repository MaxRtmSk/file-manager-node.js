import fs from "node:fs"
import fsPromisy from "node:fs/promises"
import path from "path";
import { state } from "../state.js";
import { pipeline } from 'node:stream/promises';

export const mv = async (...params) => {
    const [pathToFile, pathToNewDirectory] = params; 

    const originalFile = path.join(state.directory, pathToFile.trim());
    const copyFolder = path.join(state.directory, pathToNewDirectory.trim(), path.basename(originalFile));
    
    await pipeline(fs.createReadStream(originalFile), fs.createWriteStream(copyFolder));
    await fsPromisy.unlink(originalFile);
};