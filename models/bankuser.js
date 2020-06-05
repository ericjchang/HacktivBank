'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class BankUser extends Model {}

  BankUser.init(
    {
      UserId: DataTypes.INTEGER,
      BankId: DataTypes.INTEGER,
      appointment_time: DataTypes.STRING,
      checkedBy: DataTypes.INTEGER,
      is_checked_in: DataTypes.BOOLEAN,
    },
    { sequelize }
  );
  BankUser.associate = function (models) {
    BankUser.belongsTo(models.Bank);
    BankUser.belongsTo(models.User);
  };
  return BankUser;
};
