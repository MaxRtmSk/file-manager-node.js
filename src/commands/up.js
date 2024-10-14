import path from "node:path";
import { state } from "../state.js";

export const up = async () => {
  try {
    state.directory = path.dirname(state.directory);
  } catch (error) {
    throw error;
  }
};