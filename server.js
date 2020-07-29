/* eslint-disable no-console */
const chalk = require('chalk');
const http = require('http');
const app = require('./app');
const config = require('./config');
const database = require('./db/database');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const PORT = normalizePort(config.port);
const server = http.createServer(app);

const errorHandler = (error) => {
  if (error.syscal !== 'listen') {
    throw error;
  }

  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port: ${PORT}`;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${PORT}`;
  const log = `${chalk.yellow('[?]')} ${chalk.green('connecting... ')}`;
  console.log(`listening on ${bind}`);
  console.log('\n \t Attempting to connect to database...');

  // connect to mongodb
  database.connect();
  console.log(log);
});

server.listen(PORT);
