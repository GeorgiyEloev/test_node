import * as socketIO from 'socket.io';
import http from 'http';
import { logger } from '../core/utils/logger';

export const startWebSocket = (server: http.Server) => {
  const io = new socketIO.Server(server);

  io.on('connection', (socket: socketIO.Socket) => {
    logger.info(`Client connected:${socket.id}`);
    socket.on('disconnect', () => {
      logger.info(`Client disconnected:${socket.id}`);
    });

    socket.on('room', (data) => {
      logger.info(data.json());

      socket.emit('test', { origin: 'test' });
    });
  });
};
