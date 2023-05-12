import Joi, { Schema } from 'joi';

export const notesValidation: Schema = Joi.object({
  notes: Joi.string().min(2).max(255).required(),
});
