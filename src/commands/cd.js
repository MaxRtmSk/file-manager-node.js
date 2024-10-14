import { access, constants } from "node:fs/promises";
import path from "node:path";

import { state } from "../state.js";

export async function cd(...params) {
    const newDirectory = path.join(state.directory, params[0].trim());
    await access(newDirectory, constants.F_OK);  
    state.directory = newDirectory;
}