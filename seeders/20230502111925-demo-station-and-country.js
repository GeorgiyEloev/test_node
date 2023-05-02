/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.bulkInsert(
          'countries',
          [
            {
              id: 1,
              name: 'Russia',
              abbreviatedName: 'RU',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              name: 'United States of America',
              abbreviatedName: 'USA',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              name: 'United Kingdom',
              abbreviatedName: 'UK',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'stations',
          [
            {
              id: 1,
              name: 'AbobaMain1',
              timeZone: 'GMT+3',
              address: 'aboba address1',
              countryId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              name: 'AbobaMain2',
              timeZone: 'GMT+3',
              address: 'aboba address2',
              countryId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              name: 'AbobaMain3',
              timeZone: 'GMT+3',
              address: 'aboba address3',
              countryId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 4,
              name: 'AbobaMain4',
              timeZone: 'GMT+3',
              address: 'aboba address4',
              countryId: 3,
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
        queryInterface.bulkDelete('countries', { id: [1, 2, 3] }, { transaction: t }),
        queryInterface.bulkDelete('stations', { id: [1, 2, 3, 4] }, { transaction: t }),
      ]),
    );
  },
};
