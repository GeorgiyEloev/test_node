import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PassengerDto } from '../../core/interface/passenger.interface';
import { PassengerService } from './passenger.service';
import { PassengerRepositoryImpl } from './passenger.repository';

export class PassengerController {
  private readonly passengerService: PassengerService;

  constructor() {
    this.passengerService = new PassengerService(new PassengerRepositoryImpl());
  }

  getOneController = async (req: Request, res: Response) => {
    const passenger = await this.passengerService.getOneUser(+req.params.id);

    res.status(httpStatus.OK);
    res.send({ message: 'Get One', data: passenger });
  };

  getAllController = async (req: Request, res: Response) => {
    const passengers = await this.passengerService.getAllUser();

    res.status(httpStatus.OK);
    res.send({ message: 'Get All', data: passengers });
  };

  updateController = async (req: Request, res: Response) => {
    const passenger = req.body as PassengerDto;
    const result = await this.passengerService.updateUser(+req.params.id, passenger);
    res.status(httpStatus.OK);
    res.send({ message: 'Updated', data: result });
  };
}
