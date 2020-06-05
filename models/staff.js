'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Staff extends Model {
    get full_name() {
      return `${(this.first_name, this.last_name)}`;
    }
  }

  Staff.init(
    {
      first_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: `first name must be filled`,
          },
        },
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: `last name must be filled`,
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: `Username must be filled`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: `Password must be filled`,
          },
        },
      },
    },
    { sequelize }
  );

  Staff.associate = function (models) {
    Staff.hasOne(models.Bank);
  };
  return Staff;
};
