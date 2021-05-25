const http = require('http');
const { read, write, rename, append, remove } = require('./fileOperations');

const server = http.createServer(async (req, res) => {
  if (req.url.includes('read')) {
    try {
      const data = await read(req.url);
      res.end(data);
    } catch (error) {
      res.end(error);
    }
  } else if (req.url.includes('write')) {
    try {
      const data = await write(req.url);
      res.end(data);
    } catch (error) {
      res.end(error);
    }
  } else if (req.url.includes('rename')) {
    try {
      const data = await rename(req.url);
      res.end(data);
    } catch (error) {
      res.end(error);
    }
  } else if (req.url.includes('append')) {
    try {
      const data = await append(req.url);
      res.end(data);
    } catch (error) {
      res.end(error);
    }
  } else if (req.url.includes('delete')) {
    try {
      const data = await remove(req.url);
      res.end(data);
    } catch (error) {
      res.end(error);
    }
  } else {
    res.end('No operations defined');
  }
});

server.listen(3000);
