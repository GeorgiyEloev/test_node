/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.bulkInsert(
          'wagons',
          [
            {
              id: 1,
              numberInTrain: 1,
              factoryNumber: 'ABOBA1',
              typeWagon: 'Type1Aboba',
              serviceClass: 'Class1Aboba',
              permissionForAnimals: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              numberInTrain: 2,
              factoryNumber: 'ABOBA2',
              typeWagon: 'Type2Aboba',
              serviceClass: 'Class2Aboba',
              permissionForAnimals: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              numberInTrain: 3,
              factoryNumber: 'ABOBA3',
              typeWagon: 'Type3Aboba',
              serviceClass: 'Class3Aboba',
              permissionForAnimals: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 4,
              numberInTrain: 4,
              factoryNumber: 'ABOBA4',
              typeWagon: 'Type4Aboba',
              serviceClass: 'Class4Aboba',
              permissionForAnimals: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 5,
              numberInTrain: 5,
              factoryNumber: 'ABOBA5',
              typeWagon: 'Type5Aboba',
              serviceClass: 'Class5Aboba',
              permissionForAnimals: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 6,
              numberInTrain: 6,
              factoryNumber: 'ABOBA6',
              typeWagon: 'Type6Aboba',
              serviceClass: 'Class6Aboba',
              permissionForAnimals: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'wagon_role_employee',
          [
            {
              id: 1,
              wagonId: 1,
              roleEmployeeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              wagonId: 2,
              roleEmployeeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              wagonId: 3,
              roleEmployeeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 4,
              wagonId: 3,
              roleEmployeeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 5,
              wagonId: 4,
              roleEmployeeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 6,
              wagonId: 5,
              roleEmployeeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 7,
              wagonId: 6,
              roleEmployeeId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t },
        ),
      ]),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.bulkDelete('wagons', { id: [1, 2, 3, 4, 5, 6] }, { transaction: t }),
        queryInterface.bulkDelete('wagon_role_employee', { id: [1, 2, 3, 4, 5, 6, 7] }, { transaction: t }),
      ]),
    );
  },
};
