"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class style extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  style.init(
    {
      comment: {
        type: DataTypes.STRING,
      },
      wearingDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      minTemp: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      maxTemp: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "style",
    }
  );
  return style;
};
