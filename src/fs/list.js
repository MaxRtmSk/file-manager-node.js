import fs from 'node:fs/promises';
import path from 'path';

const __dirname = import.meta.dirname;

const FOLDER_PATH = path.join(__dirname, "./files");

const list = async () => {
    try {
        const files = await fs.readdir(FOLDER_PATH);
        console.log(files);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await list();