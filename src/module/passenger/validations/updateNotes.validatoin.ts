import Joi, { ValidationResult } from 'joi';
import { NotesDto } from '../../../core/interface/passenger.interface';

export const notesValidation = (data: NotesDto): ValidationResult<NotesDto> => {
  const schema = Joi.object({ notes: Joi.string().min(2).max(255).required() });
  return schema.validate(data);
};
