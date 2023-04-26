import express, { Application } from 'express';
import dotenv from 'dotenv';
import userRouter from './module/passenger/passenger.router';
import sequelize from './core/config/sequelize.connection';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function connect() {
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error);
  }
}

const startServer = async () => {
  const app: Application = express();
  connect();

  app.use(express.json());

  app.use('/api', userRouter);

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
};

startServer();
