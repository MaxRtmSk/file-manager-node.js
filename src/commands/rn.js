import fs from "node:fs/promises"
import path from 'path';
import { state } from "../state.js";

export const rn = async (...params) => {
    const [file, newFile] = params;

    const filePath = path.join(state.directory, file);
    const newFilePath = path.join(state.directory, newFile.trim());
        
    const isFileExists = await fs.stat(newFilePath).then(() => true).catch(() => false);

    if (isFileExists) {
        throw new Error('File already exists');
    }

    await fs.rename(filePath, newFilePath)
};
