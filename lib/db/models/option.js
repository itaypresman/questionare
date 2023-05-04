const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    static associate(models) {
    }
  }
  Option.init({
    question_id: DataTypes.NUMBER,
    text: DataTypes.STRING,
    need_explanation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Option',
  });
  return Option;
};
