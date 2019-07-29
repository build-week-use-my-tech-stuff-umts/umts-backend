module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Categories',
    [
      {
        name: 'Camera',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'TV',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Audio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Computers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Others',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {}),
};
