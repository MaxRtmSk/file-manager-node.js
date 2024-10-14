import { Transform } from "node:stream"; 

import { state } from './state.js';
import { commandHandler } from "./commandHandler.js";

export const commandProcessorStream = new Transform({
    async transform(chunk, encoding, callback){
      
      try {
        const [command, ...command_content] = String(chunk).split(" ");
        await commandHandler(command.trim())(...command_content); 
      } catch (error) {
        console.log('Operation failed');
      }
      

      return callback(null, `You are currently in ${state.directory}: \n`)
    }
});