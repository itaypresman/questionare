const {Router} = require('express');
const AppController = require('./app.controller');
const { body } = require('express-validator');
const validator = require('./middlewares/validator.middleware');


const router = new Router();

router.get('/questions', AppController.getQuestions);

router.post('/answers/save',
    body('userId').isString(),
    body('answers').isArray(),
    validator,
    AppController.saveAnswers
);


module.exports = router;
