const AppService = require('./app.service');

const getQuestions = async (req, res, next) => {
    try {
        const questions = await AppService.questionList();
        res.json({status: true, data: questions});
    } catch (e) {
        next(e);
    }
};

const saveAnswers = async (req, res, next) => {
    try {
        res.send('/answers/save');
    } catch (e) {
        next(e);
    }
};


module.exports = {
    getQuestions,
    saveAnswers,
};
