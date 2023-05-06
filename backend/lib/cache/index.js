const {Question, Option} = require('@questionare-be/db/models');
let questions = [];


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


const initCache = async () => {
    questions = await questionList();
};


module.exports = {
    getQuestions: () => questions,
    initCache,
};
