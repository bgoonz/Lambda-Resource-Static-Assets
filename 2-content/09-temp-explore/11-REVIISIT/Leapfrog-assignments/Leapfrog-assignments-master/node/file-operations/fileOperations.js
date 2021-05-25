const fs = require('fs');

function read(url) {
  const fileName = url.split('/')[2];
  return new Promise((resolve, reject) => {
    fs.readFile(`./files/${fileName}`, 'UTF-8', (err, data) => {
      if (err) {
        reject('File not found');
      } else {
        resolve(data);
      }
    });
  });
}

function write(url) {
  const fileName = url.split('/')[2];
  const content = url.split('/')[3];

  return new Promise((resolve, reject) => {
    fs.writeFile(`./files/${fileName}`, content, (err) => {
      if (err) {
        reject('File not found');
      }
      resolve('Written to the file successfully');
    });
  });
}

function rename(url) {
  const oldFileName = url.split('/')[2];
  const newFileName = url.split('/')[3];

  return new Promise((resolve, reject) => {
    fs.rename(`./files/${oldFileName}`, `./files/${newFileName}`, (err) => {
      if (err) {
        reject('Could not rename file');
      }

      resolve(`Successfully renamed ${oldFileName} to ${newFileName}`);
    });
  });
}

function append(url) {
  const fileName = url.split('/')[2];
  const content = url.split('/')[3];

  return new Promise((resolve, reject) => {
    fs.appendFile(`./files/${fileName}`, content, (err) => {
      if (err) {
        reject('File not found');
      }
      resolve(`Appended to ${fileName} successfully`);
    });
  });
}

function remove(url) {
  const fileName = url.split('/')[2];

  return new Promise((resolve, reject) => {
    fs.unlink(`./files/${fileName}`, (err) => {
      if (err) {
        reject('File not found');
      }
      resolve(`Removed ${fileName}`);
    });
  });
}

module.exports = { read, write, rename, append, remove };
