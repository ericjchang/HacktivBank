'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addConstraint('BankUsers', {
        fields: ['UserId'],
        type: 'foreign key',
        name: 'fkey_UserId',
        references: {
          table: 'Users',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      })
      .then(() => {
        return queryInterface.addConstraint('BankUsers', {
          fields: ['BankId'],
          type: 'foreign key',
          name: 'fkey_BankId',
          references: {
            table: 'Banks',
            field: 'id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('BankUsers', 'fkey_UserId').then(() => {
      return queryInterface.removeConstraint('BankUsers', 'fkey_BankId');
    });
  },
};
