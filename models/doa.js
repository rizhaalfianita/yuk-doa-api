'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doa.init({
    doa: DataTypes.STRING,
    ayat: DataTypes.TEXT,
    latin: DataTypes.TEXT,
    terjemah: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Doa',
  });
  return Doa;
};