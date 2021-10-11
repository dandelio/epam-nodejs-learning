const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, './csv/nodejs-hw1-ex1.csv');
const outputPath = path.join(__dirname, './csv/output.txt');
const ws = fs.createWriteStream(outputPath);

fs.createReadStream(csvPath)
	.pipe(csv({ ignoreEmpty: true }))
	.on('data', (data) => {
		ws.write(data, (error) => {
			if (error) {
				console.log(error);
			}
		});
	})
	.on('error', (msg) => console.log(msg));
process.exit(1);
