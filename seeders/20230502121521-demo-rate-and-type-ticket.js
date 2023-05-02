/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.bulkInsert(
          'rates',
          [
            {
              id: 1,
              name: 'Vip1Aboba',
              description: 'aboba aboba aboba',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              name: 'Vip2Aboba',
              description: 'aboba aboba aboba',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              name: 'Vip3Aboba',
              description: 'aboba aboba aboba',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'types_ticket',
          [
            {
              id: 1,
              name: 'Type1Aboba',
              description: 'aboba aboba ticket',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              name: 'Type1Aboba',
              description: 'aboba aboba ticket',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              name: 'Type1Aboba',
              description: 'aboba aboba ticket',
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
        queryInterface.bulkDelete('rates', { id: [1, 2, 3] }, { transaction: t }),
        queryInterface.bulkDelete('types_ticket', { id: [1, 2, 3] }, { transaction: t }),
      ]),
    );
  },
};
