const net = require("net");

// establishes a connection with the game server
const connect = ()=>{
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541
  });

  // interpret incoming data as text
  client.setEncoding("utf8");
return conn;
}
console.log("Connecting ...");
connect();
conn.on('connect',()=>{
  console.log('client is connected to server.');
})

// process.stdin.on('data', function(message){
//   client.write(message);
// });

// console.log("Connecting ...");
// client.on('data',function(message){
//   console.log('server sent:',message);
// });

