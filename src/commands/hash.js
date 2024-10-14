import path from "path";
import fs from "node:fs"
import { stdout } from "node:process";
import { state } from "../state.js";

const { createHash } = await import('node:crypto');

export const hash = async (...params) => {
   const filePath = path.join(state.directory, params[0].trim());
   const hashStream = createHash('sha256');

   await new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(filePath);

       readStream.on('error', reject); 
       hashStream.on('error', reject); 
       
       readStream.on('data', (chunk) => {
           hashStream.update(chunk);
       });

       readStream.on('end', () => {
           const hash = hashStream.digest('hex'); 
           stdout.write(hash + '\n'); 
           resolve(); 
       });
   });
};
