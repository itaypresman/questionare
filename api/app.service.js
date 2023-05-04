const {Question, Option} = require('@questionare-be/db/models');


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


module.exports = {
    questionList,
};
