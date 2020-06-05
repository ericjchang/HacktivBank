'use strict';
const staff = require('../files/staff.json');
staff.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Staffs', staff, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Staffs', staff, {});
  },
};
