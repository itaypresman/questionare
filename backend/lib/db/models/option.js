const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    static associate(models) {
      this.hasMany(models.Answer, {foreignKey: 'option_id', as: 'options'});
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
