'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      this.hasMany(models.Option, {foreignKey: 'question_id', as: 'options'});
      this.hasMany(models.Answer, {foreignKey: 'question_id', as: 'answers'});
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
