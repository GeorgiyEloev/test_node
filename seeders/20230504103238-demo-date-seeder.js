/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.bulkInsert(
          'passengers',
          [
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
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'employees',
          [
            {
              id: 1,
              fullName: 'Пыш Иван Иванович',
              email: 'ret3@gmai.com',
              phoneNumber: '34561 123456',
              password: '$2a$04$ZCBbDWdrNyKWo23vV6PHfu3FQ4yKNQy/T9bDfeAN59lynNSfOJW/q',
              notes: 'aboba2',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              fullName: 'Завяков Дмитрий Иванович',
              email: 'ret1@gmai.com',
              phoneNumber: '34562 123456',
              password: '$2a$04$ZCBbDWdrNyKWo23vV6PHfu3FQ4yKNQy/T9bDfeAN59lynNSfOJW/q',
              notes: 'aboba2',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              fullName: 'Гентур Дмитрий Иванович',
              email: 'ret@gmai.com',
              phoneNumber: '34564 123456',
              password: '$2a$04$ZCBbDWdrNyKWo23vV6PHfu3FQ4yKNQy/T9bDfeAN59lynNSfOJW/q',
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
        queryInterface.bulkInsert(
          'routes',
          [
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
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'route_station',
          [
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
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'flights',
          [
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
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'flight_employee',
          [
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
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'flight_wagon',
          [
            {
              id: 1,
              flightId: 1,
              wagonId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              flightId: 1,
              wagonId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              flightId: 1,
              wagonId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 4,
              flightId: 2,
              wagonId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 5,
              flightId: 2,
              wagonId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t },
        ),
        queryInterface.bulkInsert(
          'tickets',
          [
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
          ],
          { transaction: t },
        ),
      ]),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.bulkDelete('tickets', { id: [3] }, { transaction: t }),
        queryInterface.bulkDelete('tickets', { id: [2, 1] }, { transaction: t }),
        queryInterface.bulkDelete('route_station', { id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, { transaction: t }),
        queryInterface.bulkDelete('flight_wagon', { id: [1, 2, 3, 4, 5] }, { transaction: t }),
        queryInterface.bulkDelete('flight_employee', { id: [1, 2, 3, 4, 5] }, { transaction: t }),
        queryInterface.bulkDelete('wagon_role_employee', { id: [1, 2, 3, 4, 5, 6, 7] }, { transaction: t }),
        queryInterface.bulkDelete('role_employees', { id: [1, 2, 3] }, { transaction: t }),
        queryInterface.bulkDelete('passengers', { id: [1, 2, 3] }, { transaction: t }),
        queryInterface.bulkDelete('types_ticket', { id: [1, 2, 3] }, { transaction: t }),
        queryInterface.bulkDelete('rates', { id: [1, 2, 3] }, { transaction: t }),
        queryInterface.bulkDelete('flights', { id: [1, 2, 3, 4] }, { transaction: t }),
        queryInterface.bulkDelete('routes', { id: [1, 2, 3, 4] }, { transaction: t }),
        queryInterface.bulkDelete('stations', { id: [1, 2, 3, 4] }, { transaction: t }),
        queryInterface.bulkDelete('countries', { id: [1, 2, 3] }, { transaction: t }),
        queryInterface.bulkDelete('wagons', { id: [1, 2, 3, 4, 5, 6] }, { transaction: t }),
        queryInterface.bulkDelete('employees', { id: [1, 2, 3] }, { transaction: t }),
      ]),
    );
  },
};
