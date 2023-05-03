/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('route_station', [
      {
        id: 1,
        routeId: 1,
        stationId: 1,
        departureTime: new Date('1997-05-12'),
        arrivalTime: new Date('1997-05-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        routeId: 1,
        stationId: 2,
        departureTime: new Date('1997-06-12'),
        arrivalTime: new Date('1997-06-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 3,
        routeId: 2,
        stationId: 1,
        departureTime: new Date('1997-05-12'),
        arrivalTime: new Date('1997-05-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 4,
        routeId: 2,
        stationId: 2,
        departureTime: new Date('1997-06-12'),
        arrivalTime: new Date('1997-06-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        routeId: 2,
        stationId: 3,
        departureTime: new Date('1997-07-12'),
        arrivalTime: new Date('1997-07-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        routeId: 3,
        stationId: 2,
        departureTime: new Date('1997-05-12'),
        arrivalTime: new Date('1997-05-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        routeId: 3,
        stationId: 3,
        departureTime: new Date('1997-06-12'),
        arrivalTime: new Date('1997-06-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        routeId: 4,
        stationId: 2,
        departureTime: new Date('1997-06-12'),
        arrivalTime: new Date('1997-06-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        routeId: 4,
        stationId: 3,
        departureTime: new Date('1997-07-12'),
        arrivalTime: new Date('1997-07-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        routeId: 4,
        stationId: 4,
        departureTime: new Date('1997-08-12'),
        arrivalTime: new Date('1997-08-12'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('route_station', { id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, {});
  },
};
