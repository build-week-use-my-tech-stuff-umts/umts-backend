module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {},
  );
  Category.associate = (models) => {
    // associations can be defined here
    Category.hasMany(models.RentItem, {
      foreignKey: 'catId',
      as: 'rentItems',
      onDelete: 'CASCADE',
    });
  };
  return Category;
};
