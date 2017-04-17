// Export function for listening to the socket

module.exports = socket => {
  socket.emit('init', {
    name: 'akin',
    users: 'akin',
  });

  // Notify other users that a new user has joined
  socket.broadcast.emit('user:join', {
    name: 'akin',
  });

  socket.on('send:message', data => {
    console.log('message recieved', data);
    socket.broadcast.emit('send:message', {
      user: 'akin',
      text: data,
    });
  });
};
