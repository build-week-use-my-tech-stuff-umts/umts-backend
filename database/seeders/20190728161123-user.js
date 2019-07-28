const bcrypt = require('bcrypt');

const password = bcrypt.hashSync('password', 10);

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstName: 'Robinia',
        lastName: 'Oddy',
        email: 'roddy0@stanford.edu',
        avatarUrl: 'https://robohash.org/doloremsintincidunt.jpg?size=50x50&set=set1',
        phone: '264-825-1117',
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Clarance',
        lastName: 'Busse',
        email: 'cbusse1@yellowpages.com',
        avatarUrl: 'https://robohash.org/quosenimdolorem.jpg?size=50x50&set=set1',
        phone: '258-480-8477',
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Frieda',
        lastName: 'Critcher',
        email: 'fcritcher2@cisco.com',
        avatarUrl: 'https://robohash.org/estsitexplicabo.jpg?size=50x50&set=set1',
        phone: '493-299-0647',
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Lawry',
        lastName: 'Tasseler',
        email: 'ltasseler3@hostgator.com',
        avatarUrl: 'https://robohash.org/idquaeratdolore.jpg?size=50x50&set=set1',
        phone: '120-870-1462',
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Rollins',
        lastName: 'Anfonsi',
        email: 'ranfonsi4@wix.com',
        avatarUrl: 'https://robohash.org/atipsamcupiditate.jpg?size=50x50&set=set1',
        phone: '297-377-9249',
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
