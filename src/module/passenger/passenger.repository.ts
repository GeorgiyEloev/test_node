import { PassengerDto, PassengerFull } from 'core/interface/passenger.interface';
import Passenger from '../../core/entity/passenger.entity';

export interface PassengerRepository {
  findAll(): Promise<PassengerFull[] | null>;

  findOneById(id: number): Promise<PassengerFull | null>;

  updateById(id: number, passenger: PassengerDto): Promise<PassengerFull | null>;
}

export class PassengerRepositoryImpl implements PassengerRepository {
  findAll = async (): Promise<PassengerFull[] | null> => {
    const passengers = await Passenger.findAll();
    return passengers;
  };

  findOneById = async (id: number): Promise<PassengerFull | null> => {
    const passenger = await Passenger.findOne({ where: { id }, raw: true });
    return passenger;
  };

  updateById = async (id: number, passengerDto: PassengerDto): Promise<PassengerFull | null> => {
    const passenger = await Passenger.findOne({ where: { id } });

    if (!passenger) {
      throw new Error("Passenger  doesn't exists error!");
    }

    await passenger.update(passengerDto);

    return passenger;
  };
}
