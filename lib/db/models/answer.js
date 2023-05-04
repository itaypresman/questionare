'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Answer extends Model {
        static associate(models) {
        }
    }

    Answer.init({
        user_id: DataTypes.STRING,
        question_id: DataTypes.NUMBER,
        option_id: DataTypes.NUMBER,
        text: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Answer',
    });
    return Answer;
};
