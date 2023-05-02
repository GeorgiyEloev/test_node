/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING(128),
        allowNull: false,
      },
      notes: {
        type: Sequelize.DataTypes.STRING(128),
        allowNull: false,
        defaultValue: '',
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
    await queryInterface.dropTable('employees');
  },
};
