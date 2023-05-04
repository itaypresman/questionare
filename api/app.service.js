const {Question, Option, Answer} = require('@questionare-be/db/models');


const questionList = () => {
    return Question.findAll({
        include: [
            {
                model: Option,
                as: 'options',
                attributes: { exclude: ['createdAt', 'updatedAt', 'question_id'] },
                order: [['createdAt', 'ASC']]
            }
        ],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [
            [{ model: Option, as: 'options' }, 'id', 'ASC'],
        ],
    });
};

const saveAnswers = (user_id, answers) => {
    const values = answers.map(answer => ({ user_id, question_id: answer.questionId, option_id: answer.optionId, text: answer.text}));
    return Answer.bulkCreate(values);
};


module.exports = {
    questionList,
    saveAnswers,
};
