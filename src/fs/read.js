import fs from 'node:fs/promises';
import path from 'path';

const __dirname = import.meta.dirname;

const FILE_PATH = path.join(__dirname, "./files/fileToRead.txt");

const read = async () => {
    try {
        const file_data = await fs.readFile(FILE_PATH, {encoding: 'utf8'});
        console.log(file_data);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await read();