'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Banks', {
      fields: ['StaffId'],
      type: 'foreign key',
      name: 'fkey_StaffId',
      references: {
        table: 'Staffs',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Banks', 'fkey_StaffId');
  },
};
