import { Router } from 'express';

import validate from '../../core/utils/validate.middleware';
import { EmployeeController } from './employee.controller';
import { authDateValidation } from './validations/auth.date.validation';

const router: Router = Router();

const employeeController = new EmployeeController();

router.post('/employee/auth', [validate(authDateValidation)], employeeController.authController);

export default router;
