import path from "path";
import fs from "node:fs/promises"
import { stdout } from "node:process";
const { createHash } = await import('node:crypto');

const hash = createHash('sha256');

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, "./files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
   const fd = await fs.open(filePath);
   const input = fd.createReadStream();
   
   input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
