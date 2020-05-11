const socket = io('http://localhost:3000')

socket.on('chat-msg', data => {
  console.log(data);
})
