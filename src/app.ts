import express, { Application } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import routers from './api';
import { logger } from './core/utils/logger';
import sequelize from './core/config/sequelize.connection';
import { setRelationships } from './core/entity/relationships/relationships.set';
import errorHandler from './core/utils/error.handler';
import { startWebSocket } from './socket/socket. gateway';

const WebSocketServer = require('rpc-websockets').Server;

dotenv.config();

const PORT = process.env.PORT || 3000;

const connect = async () => {
  try {
    await sequelize.authenticate();
    setRelationships();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.info('Unable to connect to the database:', error);
  }
};

const startServer = async () => {
  const app: Application = express();
  // await connect();

  app.use(express.json());

  // app.use('/api', routers);
  app.use(errorHandler);
  const server = http.createServer(app);

  // startWebSocket(server);

  const server1 = new WebSocketServer({
    port: 8080,
    host: 'localhost',
  });

  // register an RPC method
  server1.register('sum', (params) => params[0] + params[1]);

  // ...and maybe a protected one also
  server1.register('account', () => ['confi1', 'confi2']).protected();

  // create an event
  server1.event('feedUpdated');

  // get events
  console.log(server1.eventList());

  // emit an event to subscribers
  server1.emit('feedUpdated');

  server.listen(PORT, () => {
    logger.info(`🚀 Server ready at http://localhost:${PORT}`);
  });
};

startServer();
