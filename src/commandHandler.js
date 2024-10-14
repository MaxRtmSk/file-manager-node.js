import { decompress } from "./commands/decompress.js";
import { compress } from "./commands/compress.js";
import { hash } from "./commands/hash.js";
import { add } from "./commands/add.js";
import { cat } from "./commands/cat.js";
import { cd } from "./commands/cd.js";
import { cp } from "./commands/cp.js";
import { ls } from "./commands/ls.js";
import { mv } from "./commands/mv.js";
import { os } from "./commands/os.js";
import { rm } from "./commands/rm.js";
import { rn } from "./commands/rn.js";
import { up } from "./commands/up.js";

const commandMap = {
  ".exit": () => process.exit(0),
  "up": up,
  "cd": cd,
  "ls": ls,
  "cat": cat,
  "add": add,
  "rn": rn,
  "cp": cp,
  "mv": mv,
  "rm": rm,
  "os": os,
  "hash": hash,
  "compress": compress,
  "decompress": decompress
};

export const commandHandler = (command) => {
    return commandMap[command] || (() => console.log('Invalid input'));
}
