'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoaType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DoaType.hasMany(sequelize.define('Doa'));
    }
  }
  DoaType.init({
    tipeDoa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DoaType',
  });
  return DoaType;
};