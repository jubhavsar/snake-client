const net = require("net");
const { IP, PORT } = require("./constants");
const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here
    port: PORT,
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
