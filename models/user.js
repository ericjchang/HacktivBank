'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class User extends Model {
    get full_name() {
      return `${(this.first_name, this.last_name)}`;
    }
  }

  User.init(
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
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: `email must be filled`,
          },
        },
      },
    },
    { sequelize }
  );

  User.beforeCreate((instance, option) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(instance.password, salt);
    instance.password = hash;
  });

  User.associate = function (models) {
    User.belongsToMany(models.Bank, { through: 'BankUsers' });
  };
  return User;
};
