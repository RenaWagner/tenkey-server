"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("publicstyles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      minTemp: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      maxTemp: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      clothingType: {
        allowNull: false,
        type: Sequelize.STRING,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("publicstyles");
  },
};
