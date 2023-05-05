import bcrypt from 'bcryptjs';
import httpStatus from 'http-status';
import Employee from '../../core/entity/employee.entity';
import AppError from '../../core/utils/AppError';
import { AuthDto } from '../../core/interface/employee.interface';
import { TokenService } from '../../service/token.sevice';

export class EmployeeService {
  private readonly tokenService: TokenService;

  constructor() {
    this.tokenService = new TokenService();
  }

  authenticateEmployee = async (authDate: AuthDto): Promise<{ accessToken: string }> => {
    const user = await Employee.findOne({ where: { email: authDate.email }, raw: true });

    if (!user) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User not found error!');
    }

    const validPassword = bcrypt.compareSync(authDate.password, user.password);
    if (!validPassword) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User authorization error!');
    }

    const accessToken = this.tokenService.generateToken({
      id: user.id,
      email: authDate.email,
    });

    const token = {
      accessToken,
    };

    return token;
  };
}
