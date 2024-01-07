"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dzikr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dzikr.init(
    {
      dzikr: DataTypes.TEXT,
      ayat: DataTypes.TEXT,
      latin: DataTypes.TEXT,
      terjemah: DataTypes.TEXT,
      dzikrTypeID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dzikr",
    }
  );
  return Dzikr;
};
