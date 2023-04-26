/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('passengers', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      document: {
        type: Sequelize.DataTypes.STRING(128),
        allowNull: false,
      },
      codeDocument: {
        type: Sequelize.DataTypes.STRING(128),
        allowNull: false,
      },
      dateBirth: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      medEmployee: {
        type: Sequelize.DataTypes.BOOLEAN,
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
    await queryInterface.dropTable('passengers');
  },
};
