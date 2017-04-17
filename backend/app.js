const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 4005;
const socket = require('./socket');

const app = (module.exports = express());

// Socket IO communication

const server = app.listen(port, function() {
  console.log('Express server listening on port %d', server.address().port);
});

const io = socketIO(server);
io.sockets.on('connection', socket);
