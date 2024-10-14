import path from 'path';
import { state } from '../state.js';
import fs from 'fs';

export const cat = async (...params) => {
   const filePath = path.join(state.directory, params[0].trim());

   await new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(filePath);

        readStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });

        readStream.on('error', (err) => {
            reject('Error reading file: ' + err);
        });

        readStream.on('end', () => {
            process.stdout.write('\n')
            resolve();
        });
    });
};
