const net = require('net');
// const connect = ()=>{
  const client = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541
  });

  // interpret incoming data as text
  client.setEncoding("utf8");
// return conn;
// };
module.exports = client;