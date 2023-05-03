/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('route_station', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
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
    await queryInterface.dropTable('route_station');
  },
};
