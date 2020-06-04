'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    branch_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    quota_per_hour: DataTypes.INTEGER,
    StaffId: DataTypes.INTEGER
  }, {});
  Bank.associate = function(models) {
    // associations can be defined here
  };
  return Bank;
};