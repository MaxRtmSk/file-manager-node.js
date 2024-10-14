import { pipeline } from 'node:stream/promises';

import { commandProcessorStream } from "./src/commandProcessorStream.js";
import { parseArgs } from "./src/args.js"
import { state } from './src/state.js';

const userName = parseArgs()['--username'] || 'Anonum';

process.on('SIGINT', () => process.exit());
process.on('exit', () => console.log(`\n Thank you for using File Manager, ${userName}, goodbye!`));

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${state.directory}:`);

await pipeline(process.stdin, commandProcessorStream, process.stdout);