"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Rena",
          lastName: "Wagner",
          email: "rena@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          sensitiveness: "cold",
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sarah",
          lastName: "Richardson",
          email: "sarah@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          sensitiveness: "heat",
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Felix",
          lastName: "Wagner",
          email: "felix@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          sensitiveness: "cold",
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Deva",
          lastName: "Oliver",
          email: "deva@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          sensitiveness: "heat",
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Matias",
          lastName: "McGuire",
          email: "matias@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          sensitiveness: "heat",
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
