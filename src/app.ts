import express, { Application } from 'express';
import dotenv from 'dotenv';
import user from './module/user/user.router';

dotenv.config();

const PORT: number | string = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());

app.use('/api', user);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
