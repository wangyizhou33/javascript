const net = require('net');

// A use-once date server. Clients get the date on connection and that's it!
const server = net.createServer((socket) => {
  socket.end(`${new Date()}\n`);
});

server.listen(59090);