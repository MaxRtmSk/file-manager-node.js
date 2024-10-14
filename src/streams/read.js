import path from "path";
import fs from "node:fs/promises"
import { stdout } from "node:process";

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, "./files/fileToRead.txt");

const read = async () => {
   const fd = await fs.open(filePath);
   const input = fd.createReadStream();
   
   input.pipe(stdout);
};

await read();
