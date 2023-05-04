const {Question, Option} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up() {
        const question = await Question.create({
            text: 'Spider-man or Hulk?',
            type: 'single',
            is_required: false,
        });

        await Option.bulkCreate([{
            text: 'Spider-man',
            question_id: question.id,
            need_explanation: false
        }, {
            text: 'Hulk',
            question_id: question.id,
            need_explanation: false
        }]);
    },

    async down(queryInterface, Sequelize) {
    }
};
