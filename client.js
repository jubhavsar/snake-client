const net = require("net");
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    let time = 1000;
    let count = 5;

    console.log("Successfully connected to game server.");
    conn.write(`Name: JUB`);
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        conn.write(`Move: up`);
      }, (time += 200));
      setTimeout(() => {
        conn.write(`Move: left`);
      }, (time += 200));
      setTimeout(() => {
        conn.write(`Move: up`);
      }, (time += 200));
      setTimeout(() => {
        conn.write(`Move: left`);
      }, (time += 200));
    }
    return conn;
  });
};

module.exports = connect;
