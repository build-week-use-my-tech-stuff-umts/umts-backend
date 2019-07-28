module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'RentItems',
    [
      {
        userId: 1,
        name: 'Camera',
        description:
            'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
        price: 65.34,
        address: '64123 Larry Place',
        imageUrl: 'http://dummyimage.com/1174x1891.jpg/cc0000/ffffff',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        name: 'HP Projector',
        description: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
        price: 96.37,
        address: '0491 Ridgeview Crossing',
        imageUrl: 'http://dummyimage.com/1177x1256.jpg/dddddd/000000',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        name: 'Desktop Computer',
        description:
            'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        price: 64.08,
        address: '95 Almo Pass',
        imageUrl: 'http://dummyimage.com/1132x1482.jpg/5fa2dd/ffffff',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        name: 'Car',
        description:
            'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
        price: 55.13,
        address: '9626 Maywood Plaza',
        imageUrl: 'http://dummyimage.com/1166x1339.jpg/ff4444/ffffff',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        name: 'Car',
        description: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        price: 64.03,
        address: '3 Corry Junction',
        imageUrl: 'http://dummyimage.com/1003x1887.jpg/ff4444/ffffff',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        name: 'Motorbike',
        description: 'Integer ac leo. Pellentesque ultrices mattis odio.',
        price: 75.44,
        address: '64 Waxwing Avenue',
        imageUrl: 'http://dummyimage.com/1021x1060.jpg/cc0000/ffffff',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        name: 'Motorbike',
        description:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        price: 53.46,
        address: '3651 Mallory Alley',
        imageUrl: 'http://dummyimage.com/1193x1193.jpg/5fa2dd/ffffff',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        name: 'Party Hall',
        description:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
        price: 81.09,
        address: '3394 Sunbrook Place',
        imageUrl: 'http://dummyimage.com/1023x1806.jpg/cc0000/ffffff',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: 'Portable Canopy',
        description: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
        price: 64.6,
        address: '96 Chinook Way',
        imageUrl: 'http://dummyimage.com/1014x1223.jpg/cc0000/ffffff',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        name: 'Microphone',
        description: 'Vivamus in felis eu sapien cursus vestibulum.',
        price: 87.53,
        address: '149 Leroy Lane',
        imageUrl: 'http://dummyimage.com/1042x1375.jpg/dddddd/000000',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RentItems', null, {}),
};
