const chatForm = document.getElementById('chat-input-form');
const socket = io();

// Msg from the server
socket.on('msg', msg => {
  console.log(msg);
  pushToDom(msg);

  window.scrollTo(0,document.body.scrollHeight);

})

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = e.target.elements.msgInput.value;

  socket.emit('chatMsg', msg);

  e.target.elements.msgInput.value = '';
  e.target.elements.msgInput.focus = '';
})

// output to DOM
function pushToDom(msg){
  const div = document.createElement('div');
  div.classList.add('msg');
  div.innerHTML = `<p> ${msg} </p>`;
  document.getElementById('msg-container').appendChild(div);
}
