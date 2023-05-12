import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { NotesDto } from '../../core/interface/passenger.interface';
import { PassengerService } from './passenger.service';

export class PassengerController {
  private readonly passengerService: PassengerService;

  constructor() {
    this.passengerService = new PassengerService();
  }

  getOneController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const passenger = await this.passengerService.getOneUser(+req.params.id);

      res.status(httpStatus.OK);
      res.send({ message: 'Get One', data: passenger });
    } catch (err) {
      next(err);
    }
  };

  getAllController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const passengers = await this.passengerService.getAllUser();

      res.status(httpStatus.OK);
      res.send({ message: 'Get All', data: passengers });
    } catch (err) {
      next(err);
    }
  };

  updateController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const passenger = req.body as NotesDto;
      const result = await this.passengerService.updateUser(+req.params.id, passenger);

      res.status(httpStatus.OK);
      res.send({ message: 'Updated', data: result });
    } catch (err) {
      next(err);
    }
  };
}
