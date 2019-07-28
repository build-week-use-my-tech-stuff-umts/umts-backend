module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review',
    {
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      rating: DataTypes.ENUM('1', '2', '3', '4', '5'),
    },
    {},
  );
  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'reviewer',
      OnDelate: 'CASCADE',
    });
    Review.belongsTo(models.RentItem, {
      foreignKey: 'itemId',
      as: 'rentItem',
      OnDelate: 'CASCADE',
    });
  };
  return Review;
};
