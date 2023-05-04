const {Router} = require('express');
const AppController = require('./app.controller');


const router = new Router();

router.get('/questions', AppController.getQuestions);

router.post('/answers/save', AppController.saveAnswers);


module.exports = router;
