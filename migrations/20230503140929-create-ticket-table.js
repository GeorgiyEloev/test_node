/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
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
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tickets');
  },
};
