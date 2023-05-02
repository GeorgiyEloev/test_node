/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wagon_role_employee', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
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
    await queryInterface.dropTable('wagon_role_employee');
  },
};
