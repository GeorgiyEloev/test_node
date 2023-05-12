import Joi, { Schema } from 'joi';

export const authDateValidation: Schema = Joi.object({
  password: Joi.string().min(4).max(255).required(),
  email: Joi.string().min(4).max(255).required().email(),
});
