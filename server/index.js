const WebSocket = require("ws");
const server = new WebSocket.Server({port:'8081'});
server.on('connection',socket=>{
    socket.on('message',message=>{
        socket.send(`Roger That ${message}`);    
    });
});