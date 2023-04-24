import { Request, Response } from 'express';
import httpStatus from 'http-status';
import IUser from '../../core/interface/IUser';
import { createUser, readUser, updateUser, deleteByIdUser } from './user.service';

const createController = (req: Request, res: Response) => {
  const user = req.body as IUser;
  createUser(user);
  res.status(httpStatus.CREATED);
  res.send({ message: 'Created' });
};

const readController = (req: Request, res: Response) => {
  res.status(httpStatus.OK);
  res.send({ message: 'Read', output: readUser(+req.params.id) });
};

const updateController = (req: Request, res: Response) => {
  const user = req.body as IUser;
  updateUser(user);
  res.status(httpStatus.OK);
  res.send({ message: 'Updated' });
};

const deleteController = (req: Request, res: Response) => {
  deleteByIdUser(+req.params.id);
  res.status(httpStatus.ACCEPTED);
  res.send({ message: 'Removed' });
};

export { createController, deleteController, updateController, readController };
