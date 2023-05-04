/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const index = {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    };
    const createdDate = {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    };
    const updatedDate = {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    };

    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.createTable(
          'wagons',
          {
            id: index,
            numberInTrain: {
              type: Sequelize.DataTypes.INTEGER,
              allowNull: false,
              unique: true,
            },
            factoryNumber: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
              unique: true,
            },
            typeWagon: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            serviceClass: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            permissionForAnimals: {
              type: Sequelize.DataTypes.BOOLEAN,
              allowNull: false,
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'wagon_role_employee',
          {
            id: index,
            wagonId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'wagons',
                key: 'id',
              },
            },
            roleEmployeeId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'role_employees',
                key: 'id',
              },
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'routes',
          {
            id: index,
            routeNumber: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
              unique: true,
            },
            startStationId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'stations',
                key: 'id',
              },
            },
            endStationId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'stations',
                key: 'id',
              },
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'route_station',
          {
            id: index,
            routeId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'routes',
                key: 'id',
              },
            },
            stationId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'stations',
                key: 'id',
              },
            },
            departureTime: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
            },
            arrivalTime: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'flights',
          {
            id: index,
            routeId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'routes',
                key: 'id',
              },
              onDelete: 'CASCADE',
              unique: true,
            },
            carrier: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            departureTime: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
            },
            arrivalTime: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
            },
            delay: {
              type: Sequelize.DataTypes.INTEGER,
              allowNull: false,
            },
            status: {
              type: Sequelize.DataTypes.ENUM,
              values: ['ожидает', 'в пути', 'завершен', 'отменен'],
              allowNull: false,
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'flight_employee',
          {
            id: index,
            flightId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'flights',
                key: 'id',
              },
            },
            roleEmployeeId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'role_employees',
                key: 'id',
              },
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'flight_wagon',
          {
            id: index,
            flightId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'flights',
                key: 'id',
              },
            },
            wagonId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'wagons',
                key: 'id',
              },
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'tickets',
          {
            id: index,
            ticketNumber: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
              unique: true,
            },
            flightId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'flights',
                key: 'id',
              },
              onDelete: 'CASCADE',
            },
            startStationId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'stations',
                key: 'id',
              },
            },
            endStationId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'stations',
                key: 'id',
              },
            },
            typeTicketId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'types_ticket',
                key: 'id',
              },
            },
            passengerId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'passengers',
                key: 'id',
              },
            },
            wagonNumber: {
              type: Sequelize.DataTypes.INTEGER,
              allowNull: false,
            },
            place: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            rateId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'rates',
                key: 'id',
              },
            },
            linen: {
              type: Sequelize.DataTypes.BOOLEAN,
              allowNull: false,
            },
            nutrition: {
              type: Sequelize.DataTypes.BOOLEAN,
              allowNull: false,
            },
            baggage: {
              type: Sequelize.DataTypes.BOOLEAN,
              allowNull: false,
            },
            clock: {
              type: Sequelize.DataTypes.BOOLEAN,
              allowNull: false,
            },
            notes: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
              defaultValue: '',
            },
            status: {
              type: Sequelize.DataTypes.ENUM,
              values: ['ожидание', 'посажен', 'высажен'],
              allowNull: false,
            },
            guardianTicketId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'tickets',
                key: 'id',
              },
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
      ]),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.dropTable('wagons', { transaction: t }),
        queryInterface.dropTable('wagon_role_employee', { transaction: t }),
        queryInterface.dropTable('routes', { transaction: t }),
        queryInterface.dropTable('route_station', { transaction: t }),
        queryInterface.dropTable('flights', { transaction: t }),
        queryInterface.dropTable('flight_employee', { transaction: t }),
        queryInterface.dropTable('flight_wagon', { transaction: t }),
        queryInterface.dropTable('tickets', { transaction: t }),
      ]),
    );
  },
};
