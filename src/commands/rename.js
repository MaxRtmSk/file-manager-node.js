import fs from "node:fs/promises"
import path from 'path';

const __dirname = import.meta.dirname;

const FILE_PATH = path.join(__dirname, "./files/wrongFilename.txt");
const NEW_FILE_NAME = path.join(__dirname, "./files/properFilename.md");


const rename = async () => {
    try {
        const isFileExists = await fs.stat(NEW_FILE_NAME).then(() => true).catch(() => false);

        if (isFileExists) {
            throw new Error('File already exists');
        }
        
        await fs.rename(FILE_PATH, NEW_FILE_NAME)
    } catch (error) {
        // error if 
        // file wrongFilename.txt don't exists
        // properFilename.md file alreasy exists  
        throw new Error("FS operation failed");
    }
};

await rename();