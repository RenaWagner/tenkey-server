"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "publicstyleRatings",
      [
        {
          rating: 1,
          userId: 1,
          publicstyleId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 4,
          userId: 1,
          publicstyleId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 3,
          userId: 1,
          publicstyleId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 5,
          userId: 1,
          publicstyleId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 4,
          userId: 2,
          publicstyleId: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 3,
          userId: 2,
          publicstyleId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("publicstyleRatings", null, {});
  },
};
