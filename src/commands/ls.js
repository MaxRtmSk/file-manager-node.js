import fs from 'node:fs/promises';
import { state } from '../state.js';

export const ls = async () => {
    try {
        const files = await fs.readdir(state.directory);
        const filesWithTypes = await Promise.all(files.map(async file => {
            const filePath = `${state.directory}/${file}`;

            const isDir = await fs.stat(filePath).then(stats => stats.isDirectory(), () => false);

            return { name: file, type: isDir ? 'directory' : 'file' };
        }));
        console.table(filesWithTypes);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};
