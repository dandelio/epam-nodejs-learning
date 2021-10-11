import csv from 'csvtojson';
import fs from 'fs';
import path from 'path';

const csvPath = path.join(__dirname, './csv/nodejs-hw1-ex1.csv');
const outputPath = path.join(__dirname, './csv/output.txt');
const ws = fs.createWriteStream(outputPath).on('error', console.log);

fs.createReadStream(csvPath)
	.pipe(csv({ ignoreEmpty: true }))
	.on('data', (data) => ws.write(data))
	.on('error', console.log);
