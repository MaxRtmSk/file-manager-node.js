import fs from 'node:fs/promises';
import { state } from '../config.js';

export const ls = async () => {
    try {
        const files = await fs.readdir(state.directory);
        console.table(files);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};
