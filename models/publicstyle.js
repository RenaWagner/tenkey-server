"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class publicstyle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      publicstyle.belongsToMany(models.user, {
        through: "publicstyleRatings",
        foreignKey: "publicstyleId",
      });
    }
  }
  publicstyle.init(
    {
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      minTemp: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      maxTemp: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      clothingType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "publicstyle",
    }
  );
  return publicstyle;
};
