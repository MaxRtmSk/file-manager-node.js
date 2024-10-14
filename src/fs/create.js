import fs from 'node:fs/promises';
import path from 'path';

const __dirname = import.meta.dirname;

const PATH = path.join(__dirname, "./files/fresh.txt");

const create = async () => {
   try {
      const content = "I am fresh and young";

      await fs.writeFile(PATH, content, { flag: 'wx' });
   } catch (error) {
      throw new Error("FS operation failed");
   }
};

await create();