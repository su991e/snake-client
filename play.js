
const net = require('net');
const connect = require('./client');

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin =  process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;

}



console.log("Connecting ..");
connect();