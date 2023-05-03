/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flights', [
      {
        id: 1,
        routeId: 1,
        carrier: 'ABOBA1',
        departureTime: new Date('1997-05-12'),
        arrivalTime: new Date('1997-05-12'),
        delay: 100000,
        status: 'завершен',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        routeId: 2,
        carrier: 'ABOBA2',
        departureTime: new Date('1997-05-12'),
        arrivalTime: new Date('1997-05-12'),
        delay: 100000,
        status: 'в пути',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 3,
        routeId: 3,
        carrier: 'ABOBA2',
        departureTime: new Date('1997-05-12'),
        arrivalTime: new Date('1997-05-12'),
        delay: 100000,
        status: 'ожидает',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 4,
        routeId: 4,
        carrier: 'ABOBA2',
        departureTime: new Date('1997-05-12'),
        arrivalTime: new Date('1997-05-12'),
        delay: 100000,
        status: 'отменен',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flights', { id: [1, 2, 3, 4] }, {});
  },
};
