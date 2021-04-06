"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class publicstyleRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      publicstyleRating.belongsTo(modesl.user);
      publicstyleRating.belongsTo(models.publicstyle);
    }
  }
  publicstyleRating.init(
    {
      rating: {
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      publicstyleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "publicstyleRating",
    }
  );
  return publicstyleRating;
};
