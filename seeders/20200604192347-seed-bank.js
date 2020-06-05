'use strict';
const bank = require('../files/bank.json');
bank.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banks', bank, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Banks', bank, {});
  },
};
