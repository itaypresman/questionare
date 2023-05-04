'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Answer extends Model {
        static associate(models) {
            this.belongsTo(models.Answer, {foreignKey: 'option_id'});
        }
    }

    Answer.init({
        user_id: DataTypes.NUMBER,
        option_id: DataTypes.NUMBER,
        text: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Answer',
    });
    return Answer;
};
