import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/config';

class User extends Model {
  public id!: number;

  public name!: string;

  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
);

User.sync();

export default User;
