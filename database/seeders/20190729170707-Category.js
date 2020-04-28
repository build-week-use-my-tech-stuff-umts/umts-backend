module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Categories', null, {})
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Camera',
          imageUrl:
              'https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'TV',
          imageUrl:
              'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Audio',
          imageUrl:
              'https://images.pexels.com/photos/306088/pexels-photo-306088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Computer',
          imageUrl:
              'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Others',
          imageUrl:
              'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {}),
};
