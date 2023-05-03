/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
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
    await queryInterface.dropTable('flights');
  },
};
