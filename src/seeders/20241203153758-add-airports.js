'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        cityId: 6, // Bengaluru
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chennai International Airport',
        cityId: 7, // Chennai
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Netaji Subhas Chandra Bose International Airport',
        cityId: 5, // Kolkata
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 4, // New Delhi
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
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
