/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('passengers', [
      {
        id: 1,
        fullName: 'Иванов Иван Иванович',
        document: 'Паспорт РФ',
        codeDocument: '1234 345234',
        dateBirth: new Date('1997-05-12'),
        medEmployee: false,
        notes: 'aboba1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        fullName: 'Иванов Дмитрий Иванович',
        document: 'Паспорт РФ',
        codeDocument: '3456 123456',
        dateBirth: new Date('1993-07-27'),
        medEmployee: true,
        notes: 'aboba2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        fullName: 'Петров Дмитрий Иванович',
        document: 'Паспорт РФ',
        codeDocument: '3456 765890',
        dateBirth: new Date('1998-01-23'),
        medEmployee: false,
        notes: 'aboba3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('passengers', { id: [1, 2, 3] }, {});
  },
};
