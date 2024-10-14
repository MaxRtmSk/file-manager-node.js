import { writeFile } from "fs/promises";
import path from "path";
import { state } from "../state.js";

export const add = async (...params) => {
    const fileName = params[0].trim();
    await writeFile(path.join(state.directory, fileName), "", {
      flag: "wx",
    });
};