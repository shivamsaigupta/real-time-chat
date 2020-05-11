const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  //emit to only the user
  socket.emit('msg', 'Hello User')
  //emit to everyone except the current user
  socket.broadcast.emit('msg', 'User joined');

  socket.on('disconnect', () => {
    socket.broadcast.emit('msg', 'User left');
  })

  // listen for chatMsg
  socket.on('chatMsg', (msg) => {
    //emit to everyone
    io.emit('msg', msg);

  })
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
