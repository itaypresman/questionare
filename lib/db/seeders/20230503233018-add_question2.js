const {Question, Option} = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up() {
        const question = await Question.create({
            text: 'How old are you?',
            type: 'single',
            is_required: true,
        });

        await Option.bulkCreate([{
            text: 'under 18',
            question_id: question.id,
            need_explanation: false
        }, {
            text: '18-26',
            question_id: question.id,
            need_explanation: false
        }, {
            text: '27-35',
            question_id: question.id,
            need_explanation: false
        }, {
            text: '35-41',
            question_id: question.id,
            need_explanation: true
        }, {
            text: 'over 41',
            question_id: question.id,
            need_explanation: true
        }]);
    },

    async down(queryInterface, Sequelize) {
    }
};
