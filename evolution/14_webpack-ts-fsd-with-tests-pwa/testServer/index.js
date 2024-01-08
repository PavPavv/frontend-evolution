'use strict';

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(port, hostname, () => {
  console.log(
    '\x1b[32m',
    'Server running at:',
    '\x1b[33m',
    `${hostname}:${port}`,
  );
});
