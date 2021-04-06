"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "publicstyleRatings",
      [
        {
          rating: 1,
          userId: 1,
          publicstyleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 4,
          userId: 1,
          publicstyleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 3,
          userId: 1,
          publicstyleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 5,
          userId: 1,
          publicstyleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 4,
          userId: 2,
          publicstyleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 3,
          userId: 2,
          publicstyleId: 4,
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
