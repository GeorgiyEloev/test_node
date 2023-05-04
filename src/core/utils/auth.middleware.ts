import dotenv from 'dotenv';
import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import AppError from './AppError';
import { TokenDataType } from '../type/token.data.type';

dotenv.config();

interface MyRequest extends Request {
  id: number;
}
const ACCESS_KEY = process.env.JWT_ACCESS_KEY || '';

const isAuthenticated = (authHeader: string | undefined): number => {
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const user = verify(token, ACCESS_KEY) as TokenDataType;
        return user.id;
      } catch (err) {
        throw new AppError(401, 'Invalid Token');
      }
    } else {
      throw new AppError(401, 'Incorrect Token');
    }
  } else {
    throw new AppError(401, 'Not Header Auth');
  }
};

export const protectRouter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = isAuthenticated(req.headers.authorization);

    // req.id = id;
    next();
  } catch (err: any) {
    next(err);
  }
};
