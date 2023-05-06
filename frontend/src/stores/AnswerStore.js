import { action, observable, makeObservable } from 'mobx';
import QuestionerApi from '@utils/questioner.api';


class AnswerStore {
    answers = [];

    constructor() {
        makeObservable(this, {
            answers: observable,

            setAnswer: action,
            addCheckBoxAnswer: action,
            deleteCheckBoxAnswer: action,
            saveAnswers: action,
        });
    };

    generateUserId = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toLowerCase();

    setAnswer = (questionId, optionId, text = '') => {
        if (!this.answers[questionId]) {
            this.answers[questionId] = { questionId, optionId, text: '' };
        }

        this.answers[questionId].optionId = optionId;
        this.answers[questionId].text = text;
    }

    addCheckBoxAnswer = (questionId, optionId) => {
        this.answers[`${questionId}_${optionId}`] = { questionId, optionId, text: null };
        console.log(this.answers)
    }

    deleteCheckBoxAnswer = (questionId, optionId) => {
        delete this.answers[`${questionId}_${optionId}`];
    }

    saveAnswers = () => {
        const data = {
            userId: this.generateUserId(),
            answers: Object.values(this.answers).filter(item => item),
        };

        QuestionerApi.post('/answers/save', data);
    };

    getOptionId = questionId => this.answers[questionId]?.optionId || null;

    getAdditionalText = (questionId, optionId) => this.answers[questionId]?.[optionId]?.text || '';
}


export default new AnswerStore();
