import { pipeline } from 'node:stream/promises';

import { commandProcessorStream } from "./src/commandProcessorStream.js";
import { parseArgs } from "./src/args.js"
import { state } from './src/state.js';

const startingArgs = parseArgs();
 
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