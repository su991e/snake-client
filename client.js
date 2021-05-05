const net = require('net');

//establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131', //IP address here,
    port: 50542 //PORT number here
  });

  //internet incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('You are now connected to game server!');
  });
  conn.write('Name: YSB');

  conn.on('connect', () => {
    console.log('You are connected');
    setInterval(() => {
      conn.write('Move: up');
    }, 100);
    setInterval(() => {
      conn.write('Move: left');
    }, 200);
    setInterval(() => {
      conn.write('Move: down');
    }, 3000);
    setInterval(() => {
      conn.write('Move: right');
    }, 1000);
  });
    
  
  


  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};



module.exports = connect;