import { PassengerDto, PassengerFull } from '../../core/interface/passenger.interface';
import { PassengerRepository } from './passenger.repository';

export class PassengerService {
  private readonly passengerRepository: PassengerRepository;

  constructor(passengerRepository: PassengerRepository) {
    this.passengerRepository = passengerRepository;
  }

  getOneUser = async (id: number): Promise<PassengerFull | null> => {
    const passenger = await this.passengerRepository.findOneById(id);
    return passenger;
  };

  getAllUser = async (): Promise<PassengerFull[] | null> => {
    const passengers = await this.passengerRepository.findAll();
    return passengers;
  };

  updateUser = async (id: number, passengerDto: PassengerDto): Promise<PassengerFull | null> => {
    const passenger = await this.passengerRepository.updateById(id, passengerDto);
    return passenger;
  };
}
