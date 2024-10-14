import { parseArgs } from "./src/cli/args.js"

async function main() {
  const __dirname = import.meta.dirname;
  console.log(process.argv)
  const startingArgs = parseArgs();
  console.log('hello', startingArgs)   
}

(async () => {
  main()
})()
