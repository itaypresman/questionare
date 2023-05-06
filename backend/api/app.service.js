const {Answer} = require('@questionare-be/db/models');


const saveAnswers = (user_id, answers) => {
    const values = answers.map(answer => ({ user_id, question_id: answer.questionId, option_id: answer.optionId, text: answer.text}));
    return Answer.bulkCreate(values);
};


module.exports = {
    saveAnswers,
};
