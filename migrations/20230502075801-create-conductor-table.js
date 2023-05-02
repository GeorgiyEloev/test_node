/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_employees', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },

      // TODO: declare Рейс_id: string; соединить с таблицей рейс

      role: {
        type: Sequelize.DataTypes.ENUM,
        values: ['ЛНП', 'проводник'],
        allowNull: false,
      },
      employeeId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        references: {
          model: 'employees',
          key: 'id',
        },
        onDelete: 'CASCADE',
        unique: true,
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
    await queryInterface.dropTable('role_employees');
  },
};
