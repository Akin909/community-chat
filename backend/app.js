const app = require('express')();
const port = process.env.PORT || 4005;
const http = require('http').Server(app);
const io = require('socket.io')(http);

const socket = require('./socket');

// Socket IO communication
io.sockets.on('connection', socket);

http.listen(port, function() {
  console.log('Express server listening on port %d', http.address().port);
});
