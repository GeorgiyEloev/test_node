/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tickets', [
      {
        id: 1,
        ticketNumber: 'ABOBA228',
        flightId: 1,
        startStationId: 1,
        endStationId: 2,
        typeTicketId: 1,
        passengerId: 1,
        wagonNumber: 1,
        place: '45 место',
        rateId: 1,
        linen: false,
        nutrition: true,
        baggage: true,
        clock: false,
        notes: "it's my life",
        status: 'ожидание',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        ticketNumber: 'ABOBA2228',
        flightId: 1,
        startStationId: 2,
        endStationId: 3,
        typeTicketId: 2,
        passengerId: 2,
        wagonNumber: 2,
        place: '45 место',
        rateId: 2,
        linen: false,
        nutrition: true,
        baggage: true,
        clock: false,
        notes: "it's my life",
        status: 'ожидание',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        ticketNumber: 'ABOBA2218',
        flightId: 1,
        startStationId: 1,
        endStationId: 3,
        typeTicketId: 1,
        passengerId: 1,
        wagonNumber: 1,
        place: '',
        rateId: 1,
        linen: false,
        nutrition: true,
        baggage: true,
        clock: false,
        notes: "it's my life",
        status: 'ожидание',
        guardianTicketId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tickets', { id: [1, 2, 3] }, {});
  },
};