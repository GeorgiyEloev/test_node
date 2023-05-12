import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';
import { logger } from './logger';

const validate = (schemaValidation: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schemaValidation.validate(req.body);

  if (error) {
    logger.error(error);
    return res.status(400).send({ message: 'Bad request', error: error.details[0].message });
  }

  return next();
};

export default validate;
