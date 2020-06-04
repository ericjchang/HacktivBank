'use strict';
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Staff.associate = function(models) {
    // associations can be defined here
  };
  return Staff;
};