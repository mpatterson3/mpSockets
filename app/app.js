console.log('loaded');
const socket = new WebSocket('ws://localhost:8081');
// socket.onmessage(({data})=>{
//      console.log('message from server: ',data);
// });
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

document.querySelector('button').onclick = function(){

    socket.send(document.querySelector('input').value);
};