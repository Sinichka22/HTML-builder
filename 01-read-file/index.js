const fs = require('fs');
const path = require('node:path');

const filePath = path.resolve(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath);
readStream.setEncoding('utf8');
readStream.on('data', (chunk) => {
  chunk.toString('utf8');
  console.log(chunk);
});
