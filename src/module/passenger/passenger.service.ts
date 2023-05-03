import Passenger from '../../core/entity/passenger.entity';
import { NotesDto, PassengerFull } from '../../core/interface/passenger.interface';

export class PassengerService {
  getOneUser = async (id: number): Promise<any | null> => {
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
      throw new Error("Passenger  doesn't exists error!");
    }

    await passenger.update(passengerDto);

    return passenger;
  };
}
