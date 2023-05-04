const {Question} = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up() {
        await Question.create({
            text: 'What is your name?',
            type: 'text',
            is_required: true,
        });
    },

    async down(queryInterface, Sequelize) {
    }
};
