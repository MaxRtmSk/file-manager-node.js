import { ls } from "./commands/ls.js";

export const commandHandler = (command) => {
    const commandMap = {
      ".exit": () => process.exit(0),
      "up": () => {},
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
