const {Question, Option} = require('@questionare-be/db/models');


const questionList = () => {
    return Question.findAll({
        include: [
            {
                model: Option,
                as: 'options',
                attributes: { exclude: ['createdAt', 'updatedAt', 'question_id'] },
            }
        ],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
};


module.exports = {
    questionList,
};
