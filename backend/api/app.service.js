const {Answer, Question, Option} = require('@questionare-be/db/models');


const saveAnswers = (user_id, answers) => {
    const values = answers.map(answer => ({ user_id, question_id: answer.questionId, option_id: answer.optionId, text: answer.text}));
    return Answer.bulkCreate(values);
};

const getAnswers = userId => {
    return Question.findAll({
        include: [
            {
                model: Answer,
                as: 'answers',
                required: false,
                where: {
                    user_id: userId
                },
                include: [
                    { model: Option, required: false, as: 'option' }
                ]
            }
        ]
    });
};


module.exports = {
    saveAnswers,
    getAnswers,
};
