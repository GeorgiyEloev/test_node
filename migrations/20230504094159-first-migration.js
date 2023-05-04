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
          'passengers',
          {
            id: index,
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
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'employees',
          {
            id: index,
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
              type: Sequelize.DataTypes.STRING(255),
              allowNull: false,
            },
            notes: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
              defaultValue: '',
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'role_employees',
          {
            id: index,
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
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'countries',
          {
            id: index,
            name: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            abbreviatedName: {
              type: Sequelize.DataTypes.STRING(64),
              allowNull: false,
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'stations',
          {
            id: index,
            name: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            timeZone: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            address: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            countryId: {
              type: Sequelize.DataTypes.INTEGER.UNSIGNED,
              references: {
                model: 'countries',
                key: 'id',
              },
              onDelete: 'CASCADE',
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'types_ticket',
          {
            id: index,
            name: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            description: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            createdAt: createdDate,
            updatedAt: updatedDate,
          },
          { transaction: t },
        ),
        queryInterface.createTable(
          'rates',
          {
            id: index,
            name: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
            },
            description: {
              type: Sequelize.DataTypes.STRING(128),
              allowNull: false,
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
        queryInterface.dropTable('role_employees', { transaction: t }),
        queryInterface.dropTable('employees', { transaction: t }),
        queryInterface.dropTable('passengers', { transaction: t }),
        queryInterface.dropTable('countries', { transaction: t }),
        queryInterface.dropTable('stations', { transaction: t }),
        queryInterface.dropTable('types_ticket', { transaction: t }),
        queryInterface.dropTable('rates', { transaction: t }),
      ]),
    );
  },
};
