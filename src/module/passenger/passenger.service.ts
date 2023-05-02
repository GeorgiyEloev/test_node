import RoleEmployee from '../../core/entity/role.employee.entity';
import Passenger from '../../core/entity/passenger.entity';
import { NotesDto, PassengerFull } from '../../core/interface/passenger.interface';
import Employee from '../../core/entity/employee.entity';

export class PassengerService {
  getOneUser = async (id: number): Promise<PassengerFull | null> => {
    const passenger = await Passenger.findOne({ where: { id }, raw: true });

    console.log(
      await RoleEmployee.findAll({
        include: { model: Employee, attributes: ['id', 'fullName'] },
      }),
    );

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
