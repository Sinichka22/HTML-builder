const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(`${err}`);
    return;
  }

  files.forEach((file) => {
    fs.stat(path.join(folderPath, file), (statErr, stats) => {
      if (statErr) {
        console.error(`Error ${statErr}`);
        return;
      }

      if (stats.isFile()) {
        console.log(
          path.parse(file).name +
            ' - ' +
            path.extname(file).slice(1) +
            ' - ' +
            (stats.size / 1024).toFixed(3) +
            ' kb',
        );
      }
    });
  });
});
