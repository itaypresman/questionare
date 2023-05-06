const AppService = require('./app.service');
const {getQuestions} = require('@questionare-be/cache');


const questionList = async (req, res, next) => {
    try {
        const questions = getQuestions();
        res.json({status: true, data: questions});
    } catch (e) {
        next(e);
    }
};

const saveAnswers = async (req, res, next) => {
    try {
        const {userId, answers} = req.body;
        await AppService.saveAnswers(userId, answers);
        res.send({status: true});
    } catch (e) {
        next(e);
    }
};


module.exports = {
    questionList,
    saveAnswers,
};
