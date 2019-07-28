module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Reviews',
    [
      {
        userId: 1,
        itemId: 1,
        rating: '3',
        comment: 'Nulla tellus. In sagittis dui vel nisl.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        itemId: 2,
        rating: '4',
        comment: 'Proin at turpis a pede posuere nonummy. Integer non velit.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        itemId: 3,
        rating: '4',
        comment:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        itemId: 4,
        rating: '2',
        comment: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        itemId: 5,
        rating: '1',
        comment: 'Aliquam non mauris. Morbi non lectus.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        itemId: 6,
        rating: '3',
        comment: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        itemId: 7,
        rating: '4',
        comment:
            'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        itemId: 8,
        rating: '5',
        comment: 'Nullam varius. Nulla facilisi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        itemId: 9,
        rating: '5',
        comment:
            'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        itemId: 10,
        rating: '5',
        comment: 'Nulla ac enim.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Reviews', null, {}),
};
