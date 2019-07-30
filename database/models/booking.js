
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    'Booking',
    {
      quantity: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      pickupTime: DataTypes.STRING,
      pickupLocation: DataTypes.STRING,
      status: DataTypes.ENUM('pending', 'paid', 'canceled'),
    },
    {},
  );
  Booking.associate = (models) => {
    // associations can be defined here
    Booking.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'owner',
      OnDelate: 'CASCADE',
    });
    Booking.belongsTo(models.RentItem, {
      foreignKey: 'itemId',
      as: 'rentItem',
      OnDelate: 'CASCADE',
    });
  };
  return Booking;
};
