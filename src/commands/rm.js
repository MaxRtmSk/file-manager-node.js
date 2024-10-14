import fs from "node:fs/promises"
import path from 'path';

import { state } from "../state.js";


export const rm = async (...params) => {
    const [file] = params; 

    const filePath = path.join(state.directory, file.trim());

    await fs.unlink(filePath);
};