// Export function for listening to the socket

module.exports = socket => {
  let name = 'guest1';
  socket.emit('init', {
    username: name,
    fromMe: true,
    submitted: false,
    password: '',
  });

  socket.on('user:login', details => {
    // console.log('user details backend', details);
    // Notify other users that a new user has joined
    name = details.username;
    socket.broadcast.emit('user:join', details);
  });

  socket.on('send:message', data => {
    // console.log('message recieved', data);
    socket.broadcast.emit('send:message', data);
  });

  socket.on('disconnect', data => {
    socket.broadcast.emit('user:left', {
      name,
    });
  });
};
