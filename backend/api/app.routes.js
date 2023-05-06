const {Router} = require('express');
const AppController = require('./app.controller');
const { body, param } = require('express-validator');
const validator = require('./middlewares/validator.middleware');


const router = new Router();

router.get('/questions', AppController.questionList);

router.post('/answers/save',
    body('userId').isString(),
    body('answers').isArray(),
    validator,
    AppController.saveAnswers
);

router.get('/answers/:userId',
    param('userId').isString(),
    validator,
    AppController.getAnswers
);


module.exports = router;
