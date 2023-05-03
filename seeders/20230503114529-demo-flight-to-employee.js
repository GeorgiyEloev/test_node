/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flight_employee', [
      {
        id: 1,
        flightId: 1,
        roleEmployeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        flightId: 1,
        roleEmployeeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        flightId: 1,
        roleEmployeeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        flightId: 2,
        roleEmployeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        flightId: 2,
        roleEmployeeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flight_employee', { id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, {});
  },
};
