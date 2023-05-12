import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { AuthDto } from '../../core/interface/employee.interface';
import { EmployeeService } from './employee.service';

export class EmployeeController {
  private readonly employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  authController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authDate = req.body as AuthDto;
      const token = await this.employeeService.authenticateEmployee(authDate);

      res.status(httpStatus.OK);
      res.send({ message: 'Auth User', data: token });
    } catch (err) {
      next(err);
    }
  };
}
