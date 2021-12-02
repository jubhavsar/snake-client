const net = require("net");
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    conn.write(`Name: JUB`);
    
  });
  return conn;

};

module.exports = connect;
