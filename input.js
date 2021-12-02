
const stdin = process.stdin;

let connection;
const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",(key)=> handleUserInput(key));
  return stdin;
};
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  // let str = "Hello!";
  // connection.on.write(str);
  if(key === 'w'){
    connection.write("Say: Hello");
    connection.write('Move: up')
  }else if(key === 's'){
    connection.write('Move: down')
  }else if(key === 'a'){
    connection.write('Move: left')
  }else if(key === 'd'){
    connection.write('Move: right')
  }
};
module.exports = setupInput;