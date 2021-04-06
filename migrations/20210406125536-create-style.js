"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("styles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.STRING,
      },
      wearingDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      minTemp: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      maxTemp: {
        allowNull: false,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("styles");
  },
};
