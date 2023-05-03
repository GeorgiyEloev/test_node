/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('routes', [
      {
        id: 1,
        routeNumber: '123U',
        startStationId: 1,
        endStationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        routeNumber: '123R',
        startStationId: 1,
        endStationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        routeNumber: '123W',
        startStationId: 2,
        endStationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        routeNumber: '123F',
        startStationId: 2,
        endStationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('routes', { id: [1, 2, 3, 4] }, {});
  },
};
