const net = require("net");
const connect = require('./client');
const stdin = process.stdin;

// setup interface to handle user input from stdin

const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  //stdin.write('');
};

// establishes a connection with the game server
    console.log("Connecting ...");
    connect();
    setupInput();
  

// client.on('data',(message)=>{
//   console.log('server sent:',message);
// })
// client.on('end', function(){
//   console.log('client disconnected from server');
// });