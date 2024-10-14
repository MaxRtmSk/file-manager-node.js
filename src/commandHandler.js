import { ls } from "./commands/ls.js";
import { up } from "./commands/up.js";

export const commandHandler = (command) => {
    const commandMap = {
      ".exit": () => process.exit(0),
      "up": up,
      "cd": () => {},
      "ls": ls,
      "cat": () => {},
      "add": () => {},
      "rn": () => {},
      "cp": () => {},
      "mv": () => {},
      "rm": () => {},
      "os": () => {},
      "hash": () => {},
      "compress": () => {},
      "decompress": () => {}
    };
  
    return commandMap[command] || (() => console.log('Invalid input'));
}
