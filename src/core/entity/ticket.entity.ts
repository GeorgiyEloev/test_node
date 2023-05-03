import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';
import { StatusTicket } from '../enum/status.ticket.enum';
import Flight from './flight.entity';
import Station from './station.entity';
import TypeTicket from './type.ticket.entity';
import Passenger from './passenger.entity';
import Rate from './rate.entity';

class Ticket extends Model<InferAttributes<Ticket>, InferCreationAttributes<Ticket>> {
  declare id: CreationOptional<number>;

  declare ticketNumber: string;

  declare flightId: number;

  declare startStationId: number;

  declare endStationId: number;

  declare typeTicketId: number;

  declare passengerId: number;

  declare wagonNumber: number;

  declare place: string;

  declare rateId: number;

  declare linen: boolean;

  declare nutrition: boolean;

  declare baggage: boolean;

  declare clock: boolean;

  declare notes: string;

  declare status: StatusTicket;

  declare guardianTicketId: number;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    ticketNumber: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    flightId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Flight,
        key: 'id',
      },
      onDelete: 'CASCADE',
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
    typeTicketId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: TypeTicket,
        key: 'id',
      },
    },
    passengerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Passenger,
        key: 'id',
      },
    },
    wagonNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    place: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    rateId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Rate,
        key: 'id',
      },
    },
    linen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    nutrition: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    baggage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    clock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '',
    },
    status: {
      type: DataTypes.ENUM,
      values: [StatusTicket.LANDED, StatusTicket.PLANTED, StatusTicket.WAIT],
      allowNull: false,
    },
    guardianTicketId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Ticket,
        key: 'id',
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'tickets',
    sequelize,
  },
);

Ticket.hasMany(Ticket, { as: 'subTickets', foreignKey: 'guardianTicketId' });
Ticket.belongsTo(Ticket, { as: 'parentTicket', foreignKey: 'guardianTicketId' });

Flight.hasMany(Ticket, { foreignKey: { name: 'flightId', allowNull: false } });
Ticket.belongsTo(Flight, { foreignKey: { name: 'flightId', allowNull: false } });

Station.hasMany(Ticket, { as: 'startTickets', foreignKey: { name: 'startStationId', allowNull: false } });
Station.hasMany(Ticket, { as: 'endTickets', foreignKey: { name: 'endStationId', allowNull: false } });
Ticket.belongsTo(Station, { as: 'endStation', foreignKey: { name: 'endStationId', allowNull: false } });
Ticket.belongsTo(Station, { as: 'startStation', foreignKey: { name: 'startStationId', allowNull: false } });

TypeTicket.hasMany(Ticket, { foreignKey: { name: 'typeTicketId', allowNull: false } });
Ticket.belongsTo(TypeTicket, { foreignKey: { name: 'typeTicketId', allowNull: false } });

Passenger.hasMany(Ticket, { foreignKey: { name: 'passengerId', allowNull: false } });
Ticket.belongsTo(Passenger, { foreignKey: { name: 'passengerId', allowNull: false } });

Rate.hasMany(Ticket, { foreignKey: { name: 'rateId', allowNull: false } });
Ticket.belongsTo(Rate, { foreignKey: { name: 'rateId', allowNull: false } });

export default Ticket;
