import path from "path";
import fs from "node:fs/promises"
import { stdin } from "node:process";

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, "./files/fileToWrite.txt");

const write = async () => {
   const fd = await fs.open(filePath, 'w+');
   const file = fd.createWriteStream();

   stdin.pipe(file);
};

await write();
