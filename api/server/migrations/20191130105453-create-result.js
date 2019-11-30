'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      findings: {
        allowNull: false,
        type: Sequelize.JSONB
      },
      repositoryName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      queuedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      scanningAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      finishedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Results');
  }
};
