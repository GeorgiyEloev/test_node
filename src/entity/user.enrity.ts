import IUser from 'core/interface/IUser';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  email: string;

  name: string;

  constructor(id: number, email: string, name: string) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}
