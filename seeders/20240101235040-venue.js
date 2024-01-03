'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkInsert('Venues', [{
        venueName: "Bogg's Social and Supply",
        address: "1310 White St SW, Atlanta, GA 30310",
        description: "A quaint bar with a sizeable outdoor patio, no green room sometimes free beer for bands.",
        latitude: "33.737280",
        longitude: "-84.430620",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
