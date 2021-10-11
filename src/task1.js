const es = require('event-stream');

process.stdin
	.pipe(es.split())
	.pipe(es.mapSync((input) => input.trim().split('').reverse().join('')))
	.pipe(process.stdout);
process.exit(1);
