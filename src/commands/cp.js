import fs from "node:fs/promises"
import path from 'path';
import { state } from "../state.js";

export const cp = async (...params) => {
    const [pathToFile, pathToNewDirectory] = params; 

    const originalFile = path.join(state.directory, pathToFile.trim());
    const copyFolder = path.join(state.directory, pathToNewDirectory.trim(), path.basename(originalFile));
    
    await fs.copyFile(originalFile, copyFolder);
};