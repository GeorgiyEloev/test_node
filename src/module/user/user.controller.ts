import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { UserDto } from '../../core/interface/user.interface';
import { UserService } from './user.service';
import { UserRepositoryImpl } from './user.repository';

export class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService(new UserRepositoryImpl());
  }

  createController = async (req: Request, res: Response) => {
    const user = await this.userService.createUser(req.body as UserDto);
    res.status(httpStatus.CREATED);
    res.send({ message: 'Created', data: user });
  };

  readController = async (req: Request, res: Response) => {
    const user = await this.userService.readUser(+req.params.id);

    res.status(httpStatus.OK);
    res.send({ message: 'Read', data: user });
  };

  updateController = async (req: Request, res: Response) => {
    const user = req.body as UserDto;
    const result = await this.userService.updateUser(+req.params.id, user);
    res.status(httpStatus.OK);
    res.send({ message: 'Updated', data: result });
  };

  deleteController = async (req: Request, res: Response) => {
    const result = await this.userService.deleteByIdUser(+req.params.id);
    res.status(httpStatus.ACCEPTED);
    res.send({ message: 'Removed', data: result });
  };
}
