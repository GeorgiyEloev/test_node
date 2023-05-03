/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flight_employee', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
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
    await queryInterface.dropTable('flight_employee');
  },
};
