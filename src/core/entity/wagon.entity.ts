import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class Wagon extends Model<InferAttributes<Wagon>, InferCreationAttributes<Wagon>> {
  declare id: CreationOptional<number>;

  declare numberInTrain: number;

  declare factoryNumber: string;

  declare typeWagon: string; // TODO: возможно enum

  declare serviceClass: string; // TODO: возможно enum/ или другая таблица

  declare permissionForAnimals: boolean;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Wagon.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    numberInTrain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    factoryNumber: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    typeWagon: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    serviceClass: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    permissionForAnimals: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'wagons',
    sequelize,
  },
);

export default Wagon;
