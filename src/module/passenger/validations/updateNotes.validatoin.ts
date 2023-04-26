import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

import { logger } from '../../../core/utils/logger';
import { NotesDto } from '../../../core/interface/passenger.interface';

const bodyValidation = (data: NotesDto) => {
  const schema = Joi.object({ notes: Joi.string().min(2).max(255).required() });
  return schema.validate(data);
};

export const notesValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = bodyValidation(req.body);

  if (error) {
    logger.error(error);
    const errors: string[] = [];
    error.details.forEach((item) => errors.push(item.message));
    return res.status(400).send({ message: 'Bad request', errors });
  }

  return next();
};
