import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import httpStatus from 'http-status';
import AppError from '../core/utils/AppError';
import { TokenDataType } from '../core/type/token.data.type';

dotenv.config();

const ACCESS_KEY = process.env.JWT_ACCESS_KEY || '';
const ACCESS_TIME_EXPIRES = process.env.JWT_ACCESS_TIME_EXPIRES || '';

export class TokenService {
  generateToken = (payload: TokenDataType): string => {
    try {
      const accessToken = sign(payload, ACCESS_KEY, {
        expiresIn: ACCESS_TIME_EXPIRES,
      });

      return accessToken;
    } catch (err) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Server error');
    }
  };
}
