'use strict';
module.exports = (sequelize, DataTypes) => {
  const RentItem = sequelize.define('RentItem', {
    name: DataTypes.STRING
    name: DataTypes.STRING
    name: DataTypes.STRING
    name: DataTypes.STRING
    name: DataTypes.STRING
  }, {});
  RentItem.associate = function(models) {
    // associations can be defined here
  };
  return RentItem;
};