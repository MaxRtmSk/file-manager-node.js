import { Transform } from "node:stream"; 

import { state } from './state.js';
import { commandHandler } from "./commandHandler.js";

export const commandProcessorStream = new Transform({
    async transform(chunk, encoding, callback){
      
      try {
        const [command, ...commandContent] = String(chunk).split(" ");
        await commandHandler(command.trim())(...commandContent); 
      } catch (error) {
        // FOR DEBUG:
        console.error(error); 
        console.log('Operation failed');
      }
      

      return callback(null, `You are currently in ${state.directory}: \n`)
    }
});