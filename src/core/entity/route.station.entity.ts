import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class RouteStation extends Model<InferAttributes<RouteStation>, InferCreationAttributes<RouteStation>> {
  declare id: CreationOptional<number>;

  declare routeId: number;

  declare stationId: number;

  declare departureTime: Date;

  declare arrivalTime: Date;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

RouteStation.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    routeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'routes',
        key: 'id',
      },
    },
    stationId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'stations',
        key: 'id',
      },
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'route_station',
    sequelize,
  },
);

export default RouteStation;
