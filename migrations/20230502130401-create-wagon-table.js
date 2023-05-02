/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wagons', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
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
    await queryInterface.dropTable('wagons');
  },
};
