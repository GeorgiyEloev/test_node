import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class Employee extends Model<InferAttributes<Employee>, InferCreationAttributes<Employee>> {
  declare id: CreationOptional<number>;

  declare fullName: string;

  declare phoneNumber: string;

  declare email: string;

  declare password: string;

  declare notes: CreationOptional<string>;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '',
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'employees',
    sequelize,
  },
);

export default Employee;
