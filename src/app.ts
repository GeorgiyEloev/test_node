import express, { Application } from 'express';
import dotenv from 'dotenv';
import routers from './api';
import { logger } from './core/utils/logger';
import sequelize from './core/config/sequelize.connection';
import { setRelationships } from './core/entity/relationships/relationships.set';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function connect() {
  try {
    await sequelize.authenticate();
    setRelationships();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.info('Unable to connect to the database:', error);
  }
}

const startServer = async () => {
  const app: Application = express();
  await connect();

  app.use(express.json());

  app.use('/api', routers);

  app.listen(PORT, () => {
    logger.info(`🚀 Server ready at http://localhost:${PORT}`);
  });
};

startServer();
