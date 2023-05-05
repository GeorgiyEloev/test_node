import dotenv from 'dotenv';
import httpStatus from 'http-status';
import { verify } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';

import AppError from './AppError';
import { TokenDataType } from '../type/token.data.type';
import { ModifyRequest } from '../interface/custome.request.interface';

dotenv.config();

const ACCESS_KEY = process.env.JWT_ACCESS_KEY || '';

const isAuthenticated = (authHeader: string | undefined): number => {
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const user = verify(token, ACCESS_KEY) as TokenDataType;
        return user.id;
      } catch (err) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid Token');
      }
    } else {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Incorrect Token');
    }
  } else {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Not Header Auth');
  }
};

export const protectRouter = async (req: ModifyRequest, res: Response, next: NextFunction) => {
  try {
    const id = isAuthenticated(req.headers.authorization);

    req.id = id;
    next();
  } catch (err) {
    next(err);
  }
};
