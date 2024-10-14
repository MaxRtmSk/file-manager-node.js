import path from "node:path";
import { state } from "../state.js";

export const up = async () => {
  state.directory = path.dirname(state.directory);
};