import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class FlightEmployee extends Model<InferAttributes<FlightEmployee>, InferCreationAttributes<FlightEmployee>> {
  declare id: CreationOptional<number>;

  declare flightId: number;

  declare roleEmployeeId: number;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

FlightEmployee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    flightId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'flights',
        key: 'id',
      },
    },
    roleEmployeeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'role_employees',
        key: 'id',
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'flight_employee',
    sequelize,
  },
);

export default FlightEmployee;
