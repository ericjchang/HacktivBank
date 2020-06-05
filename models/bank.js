'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Bank extends Model {}

  Bank.init(
    {
      branch_name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      quota_per_hour: DataTypes.INTEGER,
      StaffId: DataTypes.INTEGER,
    },
    { sequelize }
  );
  Bank.associate = function (models) {
    Bank.belongsTo(models.Staff);
    Bank.belongsToMany(models.User, { through: 'BankUsers' });
  };
  return Bank;
};
