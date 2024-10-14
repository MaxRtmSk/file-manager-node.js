import fs from "node:fs/promises"
import path from 'path';

const __dirname = import.meta.dirname;

const orignalFolder = path.join(__dirname, "./files");
const copyFolder = path.join(__dirname, "./files_copy");

const copy = async () => {
    try {
        await fs.cp(orignalFolder, copyFolder, { recursive: true, force: false, errorOnExist: true });
    } catch (err) {
        throw Error("FS operation failed");
    }
}; 

await copy();
