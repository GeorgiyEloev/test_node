import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';
import { StatusFlight } from '../enum/status.flight.enum';
import Route from './route.entity';
import FlightEmployee from './flight.employee.entity';
import RoleEmployee from './role.employee.entity';
import Wagon from './wagon.entity';
import FlightWagon from './flight.wagon.entity';

class Flight extends Model<InferAttributes<Flight>, InferCreationAttributes<Flight>> {
  declare id: CreationOptional<number>;

  declare routeId: number;

  declare carrier: string;

  declare departureTime: Date;

  declare arrivalTime: Date;

  declare delay: number;

  declare status: StatusFlight;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Flight.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    routeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Route,
        key: 'id',
      },
      onDelete: 'CASCADE',
      unique: true,
    },
    carrier: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: [StatusFlight.CANCEL, StatusFlight.FINISH, StatusFlight.OPEN, StatusFlight.WAIT],
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'flights',
    sequelize,
  },
);

Route.hasOne(Flight, { foreignKey: { name: 'routeId', allowNull: false } });
Flight.belongsTo(Route, { foreignKey: { name: 'routeId', allowNull: false } });

Flight.belongsToMany(RoleEmployee, { through: FlightEmployee, foreignKey: 'flightId' });
RoleEmployee.belongsToMany(Flight, { through: FlightEmployee, foreignKey: 'roleEmployeeId' });

Flight.belongsToMany(Wagon, { through: FlightWagon, foreignKey: 'flightId' });
Wagon.belongsToMany(Flight, { through: FlightWagon, foreignKey: 'wagonId' });

export default Flight;
