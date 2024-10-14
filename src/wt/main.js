import os from "os";
import { Worker } from "node:worker_threads"; 
import path from 'path';

const createPromisWorker = (workerFile, workerData) => {
  return new Promise((resolve, reject) => {
		const worker = new Worker(workerFile, {
			workerData,
		});

		worker.on('message', (data) => resolve({'status': 'resolved', data}));
		worker.on('error', () => resolve({'status': 'error', data: null}));
		worker.on('exit', () => resolve({'status': 'error', data: null}));
	});
}

const performCalculations = async () => {
	const workerFile = path.join(import.meta.dirname, './worker.js'); 
  const cpusAmount = os.cpus().length;
  const workers = new Array(cpusAmount);

  for (let index = 0; index < cpusAmount; index++) {
    workers[index] = createPromisWorker(workerFile, 10 + index);  
  }
  
  const result = await Promise.all(workers);
  console.log(result);
};

await performCalculations();
