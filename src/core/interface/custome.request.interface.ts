import { Request } from 'express';

export interface ModifyRequest extends Request {
  id?: number;
}
