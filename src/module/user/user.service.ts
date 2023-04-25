import userRepository from '../../core/entity/user.enrity';
import IUser from '../../core/interface/IUser';

export class UserService {
  createUser = async (user: IUser): Promise<IUser> => {
    const results = await userRepository.create({ ...user });
    return results;
  };

  readUser = async (id: number): Promise<IUser | null> => {
    const user: IUser | null = await userRepository.findOne({ where: { id }, raw: true });
    return user;
  };

  updateUser = async (id: number, user: IUser): Promise<IUser | null> => {
    const candidate = await userRepository.findOne({ where: { id }, raw: true });

    candidate?.update({ ...user });

    return candidate;
  };

  deleteByIdUser = async (id: number): Promise<number> => userRepository.destroy({ where: { id } });
}
