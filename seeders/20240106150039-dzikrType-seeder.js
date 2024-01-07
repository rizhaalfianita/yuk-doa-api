"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
     return queryInterface.bulkInsert("DzikrTypes", [
       {
         tipeDzikr: "Dzikir Pagi",
       },
       {
         tipeDzikr: "Dzikir Petang",
       },
       {
         tipeDzikr: "Dzikir Setelah Sholat",
       },
     ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DzikrTypes", {}, null);
  },
};
