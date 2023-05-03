import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class FlightWagon extends Model<InferAttributes<FlightWagon>, InferCreationAttributes<FlightWagon>> {
  declare id: CreationOptional<number>;

  declare flightId: number;

  declare wagonId: number;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

FlightWagon.init(
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
    wagonId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'wagons',
        key: 'id',
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'flight_wagon',
    sequelize,
  },
);

export default FlightWagon;
