import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import AppError from './AppError';

const errorHandler: ErrorRequestHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.httpCode).json({ message: err.message });
  next();
};

export default errorHandler;
