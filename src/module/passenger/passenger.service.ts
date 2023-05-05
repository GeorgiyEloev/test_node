import httpStatus from 'http-status';
import Passenger from '../../core/entity/passenger.entity';
import { NotesDto, PassengerFull } from '../../core/interface/passenger.interface';
import AppError from '../../core/utils/AppError';

export class PassengerService {
  getOneUser = async (id: number): Promise<PassengerFull | null> => {
    const passenger = await Passenger.findOne({ where: { id }, raw: true });

    return passenger;
  };

  getAllUser = async (): Promise<PassengerFull[] | null> => {
    const passengers = await Passenger.findAll();
    return passengers;
  };

  updateUser = async (id: number, passengerDto: NotesDto): Promise<PassengerFull | null> => {
    const passenger = await Passenger.findOne({ where: { id } });

    if (!passenger) {
      throw new AppError(httpStatus.NOT_FOUND, "Passenger  doesn't exists error!");
    }

    await passenger.update(passengerDto);

    return passenger;
  };
}
