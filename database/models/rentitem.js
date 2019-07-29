
module.exports = (sequelize, DataTypes) => {
  const RentItem = sequelize.define(
    'RentItem',
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL(12, 2),
      address: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      status: DataTypes.ENUM('open', 'rented'),
    },
    {},
  );
  RentItem.associate = (models) => {
    // associations can be defined here
    RentItem.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'owner',
      onDelete: 'CASCADE',
    });
    RentItem.belongsTo(models.Category, {
      foreignKey: 'catId',
      as: 'category',
    });
    RentItem.hasMany(models.Review, {
      foreignKey: 'userId',
      as: 'reviews',
    });
    RentItem.hasMany(models.Booking, {
      foreignKey: 'userId',
      as: 'bookings',
    });
  };
  return RentItem;
};
