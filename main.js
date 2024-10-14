import { pipeline } from 'node:stream/promises';
import { Transform } from "node:stream";  

import { commandHandler } from "./src/commandHandler.js";
import { parseArgs } from "./src/args.js"
import { state } from './src/config.js';
export { ls } from "./src/commands/ls.js";

const startingArgs = parseArgs();
 
const commandProcessorStream = new Transform({
  async transform(chunk, encoding, callback){
    
    const [command, ...command_content] = String(chunk).split(" ");

    await commandHandler(command.trim())(...command_content);

    return callback(null, `You are currently in ${state.directory}: \n`)
  }
});

async function main() {
  try {
    console.log(`Welcome to the File Manager, ${startingArgs['--username'] || 'Anonum'}!`);
    console.log(`You are currently in ${state.directory}:`);

    await pipeline(process.stdin, commandProcessorStream, process.stdout);
  } catch (error) {
    console.log('Main error')
  }
};

process.on('SIGINT', () => process.exit());
process.on('exit', () => console.log(`\n Thank you for using File Manager, ${startingArgs['--username'] || 'Anonum'}, goodbye!`));

await main()