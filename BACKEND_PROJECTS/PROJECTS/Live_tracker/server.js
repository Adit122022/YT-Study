const app = require('./src/app');
const http = require('http')
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

io.on("connection", function(socket){
    console.log("New user connected");
  socket.on("send-location", (data) => {
        io.emit("receive-location", { id: socket.id,...data});
  });
    socket.on("disconnect", function(){
        console.log("User disconnected");
        io.emit('user-disconnected' , socket.id)
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');  // Server is listening on port 3000
});