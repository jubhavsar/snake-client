const net = require("net");
const connect = require('./client');

// establishes a connection with the game server
    console.log("Connecting ...");
    connect();
  

// client.on('data',(message)=>{
//   console.log('server sent:',message);
// })
// client.on('end', function(){
//   console.log('client disconnected from server');
// });