import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';
import Station from './station.entity';

class Route extends Model<InferAttributes<Route>, InferCreationAttributes<Route>> {
  declare id: CreationOptional<number>;

  declare routeNumber: string;

  declare startStationId: number;

  declare endStationId: number;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Route.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    routeNumber: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    startStationId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Station,
        key: 'id',
      },
    },
    endStationId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Station,
        key: 'id',
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'routes',
    sequelize,
  },
);

export default Route;
