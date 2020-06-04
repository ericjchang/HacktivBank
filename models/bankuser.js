'use strict';
module.exports = (sequelize, DataTypes) => {
  const BankUser = sequelize.define('BankUser', {
    UserId: DataTypes.INTEGER,
    BranchId: DataTypes.INTEGER,
    appointment_time: DataTypes.STRING,
    checkedBy: DataTypes.INTEGER,
    is_checked_in: DataTypes.BOOLEAN
  }, {});
  BankUser.associate = function(models) {
    // associations can be defined here
  };
  return BankUser;
};