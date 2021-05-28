const express = require('express');
const cors=require('cors')
const app=express();
app.use(cors());
const http = require('http');
const server=http.createServer(app);
let history=[];
let users={};
const socket_io = require('socket.io')
const io=socket_io(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
      // chat left
      if(users[socket.id]){
      io.emit('broadcastIntro',{
        name:"SERVER",
        txt:`${ users[socket.id]} has left the chat `,
    })
}
    });
 
/// Joining Notification

    socket.on('Introduction',(msg)=>{
     users[socket.id]=msg.user;

     io.emit('broadcastIntro',{
        name:"SERVER",
        txt:`${msg.user} has joined the chat`,
    })
    })

 

    socket.on('mySocketEndPoint', (msg) => {
        io.emit('myBroadCast', msg);
        history.push(msg);
        console.log(msg);
      });

  });

app.get('/history',(req,res)=>{
    res.send(history);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(9999,() => {
  console.log('listening on *:9999');
})