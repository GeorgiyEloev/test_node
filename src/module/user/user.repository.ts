import { UserDto, UserFull } from 'core/interface/user.interface';
import { error } from 'console';
import User from '../../core/entity/user.entity';

export interface UserRepository {
  create(user: UserDto): Promise<UserFull>;

  findOneById(id: number): Promise<UserFull | null>;

  updateById(id: number, user: UserDto): Promise<UserFull | null>;

  deleteById(id: number): Promise<number>;
}

export class UserRepositoryImpl implements UserRepository {
  create = async (user: UserDto): Promise<UserFull> => {
    const results = await User.create(user);
    return results;
  };

  findOneById = async (id: number): Promise<UserFull | null> => {
    const user = await User.findOne({ where: { id }, raw: true });
    return user;
  };

  updateById = async (id: number, user: UserDto): Promise<UserFull | null> => {
    const candidate = await User.findOne({ where: { id }, raw: true });

    if (!candidate) {
      throw new Error('User already exists error!');
    }
    candidate.set(user);
    await candidate.save();

    return candidate;
  };

  deleteById = async (id: number): Promise<number> => User.destroy({ where: { id } });
}
