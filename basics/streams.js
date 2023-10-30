const fs = require('fs');

const readStream = fs.createReadStream('./test.txt', 'utf8');
const writeStream = fs.createWriteStream('./streamText.txt');

// readStream.on('data', (chunk) => {
//     console.log('---New Chunk---');
//     console.log(chunk.toString());
//     writeStream.write('\n Chunk \n');
//     writeStream.write(chunk)
// });

// piping
readStream.pipe(writeStream);