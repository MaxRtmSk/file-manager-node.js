import fs from "node:fs/promises"
import path from 'path';

const __dirname = import.meta.dirname;
const PATH = path.join(__dirname, "./files/fileToRemove.txt");


const remove = async () => {
    try {
        await fs.unlink(PATH);
    } catch(err) {
        throw new Error("FS operation failed");
    }
};

await remove();