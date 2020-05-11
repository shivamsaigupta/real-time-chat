const io = require('socket.io')(3000)

io.on('connection', socket => {
  console.log('Hi im server');
  socket.emit('chat-msg', 'Hello World');
})
