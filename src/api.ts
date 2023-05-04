import { Router } from 'express';

import passengerRouter from './module/passenger/passenger.router';
import employeeRouter from './module/employee/employee.router';

const routers: Router = Router();
routers.use(passengerRouter);
routers.use(employeeRouter);

export default routers;
