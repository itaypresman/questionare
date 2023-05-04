'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      this.hasMany(models.Option, {foreignKey: 'question_id', as: 'options'});
    }
  }
  Question.init({
    text: DataTypes.STRING,
    type: DataTypes.STRING,
    is_required: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
