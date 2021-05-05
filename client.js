const net = require('net');

//establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131', //IP address here,
    port: 50542 //PORT number here
  });

  //internet incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

console.log("Connecting ..");
connect();

module.exports = connect;