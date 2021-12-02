const net = require("net");
const  connect  = require('./client');
const  setupInput  = require('./input');

// establishes a connection with the game server
    console.log("Connecting ...");
    connect();
    setupInput(connect());
  

// client.on('data',(message)=>{
//   console.log('server sent:',message);
// })
// client.on('end', function(){
//   console.log('client disconnected from server');
// });