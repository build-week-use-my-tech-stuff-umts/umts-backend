module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Bookings',
    [
      {
        userId: 1,
        itemId: 1,
        quantity: 93,
        startDate: '2019-08-17 15:01:27',
        endDate: '2019-08-23 16:43:17',
        pickupTime: '2019-08-22 22:56:45',
        pickupLocation: '982 Twin Pines Center',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        itemId: 2,
        quantity: 87,
        startDate: '2019-08-28 05:07:26',
        endDate: '2019-08-06 05:55:45',
        pickupTime: '2019-08-21 01:27:02',
        pickupLocation: '76368 American Point',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        itemId: 3,
        quantity: 85,
        startDate: '2019-08-13 06:20:54',
        endDate: '2019-08-19 19:19:34',
        pickupTime: '2019-08-12 06:43:27',
        pickupLocation: '421 Moose Parkway',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        itemId: 4,
        quantity: 28,
        startDate: '2019-07-28 06:19:36',
        endDate: '2019-08-06 17:46:34',
        pickupTime: '2019-08-11 10:07:37',
        pickupLocation: '92799 Lotheville Crossing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        itemId: 5,
        quantity: 44,
        startDate: '2019-08-12 17:42:37',
        endDate: '2019-08-18 06:03:43',
        pickupTime: '2019-08-03 00:17:40',
        pickupLocation: '9076 Reindahl Circle',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        itemId: 6,
        quantity: 64,
        startDate: '2019-07-30 13:07:09',
        endDate: '2019-08-10 23:54:17',
        pickupTime: '2019-08-23 18:42:37',
        pickupLocation: '183 West Terrace',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        itemId: 7,
        quantity: 80,
        startDate: '2019-08-06 17:39:34',
        endDate: '2019-08-11 13:25:51',
        pickupTime: '2019-08-13 01:41:55',
        pickupLocation: '5837 Coolidge Road',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        itemId: 8,
        quantity: 3,
        startDate: '2019-08-13 03:46:33',
        endDate: '2019-08-08 04:23:52',
        pickupTime: '2019-07-29 11:20:41',
        pickupLocation: '712 Shoshone Avenue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        itemId: 9,
        quantity: 94,
        startDate: '2019-08-30 01:23:20',
        endDate: '2019-08-04 16:03:49',
        pickupTime: '2019-08-20 06:28:42',
        pickupLocation: '485 Truax Hill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        itemId: 10,
        quantity: 95,
        startDate: '2019-08-03 20:12:44',
        endDate: '2019-08-18 19:33:03',
        pickupTime: '2019-08-30 17:32:25',
        pickupLocation: '41174 Swallow Junction',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Bookings', null, {}),
};
