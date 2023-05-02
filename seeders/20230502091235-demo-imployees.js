/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.bulkInsert(
          'employees',
          [
            {
              id: 1,
              fullName: 'Пыш Иван Иванович',
              email: 'ret3@gmai.com',
              phoneNumber: '34561 123456',
              password: '123445',
              notes: 'aboba2',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              fullName: 'Завяков Дмитрий Иванович',
              email: 'ret1@gmai.com',
              phoneNumber: '34562 123456',
              password: '123445',
              notes: 'aboba2',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              fullName: 'Гентур Дмитрий Иванович',
              email: 'ret@gmai.com',
              phoneNumber: '34564 123456',
              password: '123445',
              notes: 'aboba2',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'role_employees',
          [
            {
              id: 1,
              role: 'ЛНП',
              employeeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              role: 'ЛНП',
              employeeId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              role: 'ЛНП',
              employeeId: 3,
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
        queryInterface.bulkDelete('employees', { id: [1, 2, 3] }, { transaction: t }),
        queryInterface.bulkDelete('role_employees', { id: [1, 2, 3] }, { transaction: t }),
      ]),
    );
  },
};
