import { UserDto, UserFull } from '../../core/interface/user.interface';
import { UserRepository } from './user.repository';

export class UserService {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  createUser = async (user: UserDto): Promise<UserFull> => {
    const results = await this.userRepository.create({ ...user });
    return results;
  };

  readUser = async (id: number): Promise<UserFull | null> => {
    const user = await this.userRepository.findOneById(id);
    return user;
  };

  updateUser = async (id: number, user: UserDto): Promise<UserFull | null> => {
    const candidate = await this.userRepository.updateById(id, user);
    return candidate;
  };

  deleteByIdUser = async (id: number): Promise<number> => this.userRepository.deleteById(id);
}
