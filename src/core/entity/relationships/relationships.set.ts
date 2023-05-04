import Country from '../country.entity';
import Employee from '../employee.entity';
import FlightEmployee from '../flight.employee.entity';
import Flight from '../flight.entity';
import FlightWagon from '../flight.wagon.entity';
import Passenger from '../passenger.entity';
import Rate from '../rate.entity';
import RoleEmployee from '../role.employee.entity';
import Route from '../route.entity';
import RouteStation from '../route.station.entity';
import Station from '../station.entity';
import Ticket from '../ticket.entity';
import TypeTicket from '../type.ticket.entity';
import Wagon from '../wagon.entity';
import WagonRoleEmployee from '../wagon.role.employee.entity';

export const setRelationships = () => {
  Route.hasOne(Flight, { foreignKey: { name: 'routeId', allowNull: false } });
  Flight.belongsTo(Route, { foreignKey: { name: 'routeId', allowNull: false } });

  Flight.belongsToMany(RoleEmployee, { through: FlightEmployee, foreignKey: 'flightId' });
  RoleEmployee.belongsToMany(Flight, { through: FlightEmployee, foreignKey: 'roleEmployeeId' });

  Flight.belongsToMany(Wagon, { through: FlightWagon, foreignKey: 'flightId' });
  Wagon.belongsToMany(Flight, { through: FlightWagon, foreignKey: 'wagonId' });

  Employee.hasOne(RoleEmployee, { foreignKey: { name: 'employeeId', allowNull: false } });
  RoleEmployee.belongsTo(Employee, { foreignKey: { name: 'employeeId', allowNull: false } });

  Station.hasMany(Route, { as: 'startRoutes', foreignKey: 'startStationId' });
  Station.hasMany(Route, { as: 'endRoutes', foreignKey: 'endStationId' });
  Route.belongsTo(Station, { as: 'endStation', foreignKey: 'endStationId' });
  Route.belongsTo(Station, { as: 'startStation', foreignKey: 'startStationId' });

  Station.belongsToMany(Route, { through: RouteStation, foreignKey: 'stationId', as: 'stationRoutes' });
  Route.belongsToMany(Station, { through: RouteStation, foreignKey: 'routeId', as: 'routeStations' });

  Country.hasMany(Station, { foreignKey: { name: 'countryId', allowNull: false } });
  Station.belongsTo(Country, { foreignKey: { name: 'countryId', allowNull: false } });

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

  Wagon.belongsToMany(RoleEmployee, { through: WagonRoleEmployee, foreignKey: 'wagonId' });
  RoleEmployee.belongsToMany(Wagon, { through: WagonRoleEmployee, foreignKey: 'roleEmployeeId' });
};
