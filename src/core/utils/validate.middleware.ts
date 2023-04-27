import { Request, Response, NextFunction } from 'express';
import { ValidationResult } from 'joi';
import { logger } from './logger';
import { BodyType } from '../type/validate.type';

const validate =
  (schemaValidation: (data: BodyType) => ValidationResult<BodyType>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schemaValidation(req.body);

    if (error) {
      logger.error(error);
      const errors: string[] = [];
      error.details.forEach((item) => errors.push(item.message));
      return res.status(400).send({ message: 'Bad request', errors });
    }

    return next();
  };

export default validate;
