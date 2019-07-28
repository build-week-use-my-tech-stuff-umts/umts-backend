
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Bookings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    itemId: {
      type: Sequelize.INTEGER,
    },
    startDate: {
      type: Sequelize.DATE,
    },
    endDate: {
      type: Sequelize.DATE,
    },
    pickupTime: {
      type: Sequelize.DATE,
    },
    pickupLocation: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM('pending', 'paid', 'canceled'),
      defaultValue: 'pending',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Bookings'),
};
