
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('RentItems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    price: {
      type: Sequelize.DECIMAL(12, 2),
    },
    address: {
      type: Sequelize.STRING,
    },
    imageUrl: {
      type: Sequelize.STRING,
      validate: {
        isUrl: {
          msg: 'imageUrl must be a valid URL',
        },
      },
    },
    status: {
      type: Sequelize.ENUM('open', 'rented'),
      defaultValue: 'open',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('RentItems'),
};
