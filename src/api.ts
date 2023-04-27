import { Router } from 'express';

import userRouter from './module/passenger/passenger.router';

const routers: Router = Router();
routers.use(userRouter);

export default routers;
