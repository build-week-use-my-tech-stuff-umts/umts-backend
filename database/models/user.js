module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      avatarUrl: DataTypes.STRING,
    },
    {},
  );
  User.associate = (models) => {
    User.hasMany(models.RentItem, {
      foreignKey: 'userId',
      as: 'rentItems',
    });

    User.hasMany(models.Booking, {
      foreignKey: 'userId',
      as: 'bookings',
    });
    User.hasMany(models.Review, {
      foreignKey: 'userId',
      as: 'reviews',
    });
  };
  return User;
};
