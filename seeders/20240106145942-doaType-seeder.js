"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DoaTypes", [
      {
        tipeDoa: "Doa Harian",
      },
      {
        tipeDoa: "Doa Setelah Sholat",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DoaTypes", {}, null);
  },
};
