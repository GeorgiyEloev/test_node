import httpStatus from 'http-status';
import { log } from 'console';
import IUser from '../../core/interface/IUser';
import AppError from '../../core/utils/AppError';

let userStorage: Array<IUser> = [{ name: '', id: 1, email: '' }];

const createUser = (user: IUser): boolean => {
  if (userStorage.push(user)) {
    log(userStorage);
    return true;
  }

  throw new AppError(httpStatus.BAD_GATEWAY, 'User was not created!');
};

const readUser = (id: number): IUser => userStorage[id];

const updateUser = (user: IUser): boolean => {
  userStorage = userStorage.map((u) => (u.id === user.id ? { ...u, updatedField: 1 } : u));
  return true;
};

const deleteByIdUser = (id: number) => {
  userStorage = userStorage.filter((_: IUser, index: number) => index !== id);
  return true;
};

export { createUser, readUser, updateUser, deleteByIdUser };
