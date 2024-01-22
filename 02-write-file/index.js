const fs = require('fs');
const readline = require('readline');
const path = require('path');

function createFile() {
  fs.open('02-write-file.txt', 'w', (err) => {
    if (err) throw err;
  });
}
createFile();

const filePath = path.resolve(__dirname, '02-write-file.txt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function writeFile(text) {
  const writeStream = fs.createWriteStream(filePath, {
    flags: 'a',
    encoding: 'utf8',
  });
  writeStream.write(`${text}\n`);
  writeStream.end();
}

function exitFile() {
  console.log('You have left the program');
  process.exit();
}

rl.on('close', exitFile);

function requestText() {
  rl.question('Enter text or "exit": ', (answer) => {
    if (answer === 'exit') {
      rl.close();
    } else {
      writeFile(answer);
      requestText();
    }
  });
}
requestText();
