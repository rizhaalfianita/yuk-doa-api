'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Dzikrs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dzikr: {
        type: Sequelize.TEXT,
      },
      ayat: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      latin: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      terjemah: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      dzikrTypeID: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dzikrs');
  }
};