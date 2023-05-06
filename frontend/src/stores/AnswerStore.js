import { action, observable, makeObservable } from 'mobx';
import QuestionerApi from '@utils/questioner.api';
import QuestionStore from "@stores/QuestionStore";


class AnswerStore {
      answers = [];
    isValidRequiredQuestions = false;

    constructor() {
        makeObservable(this, {
            answers: observable,
            isValidRequiredQuestions: observable,

            setAnswer: action,
            addCheckBoxAnswer: action,
            deleteCheckBoxAnswer: action,
            saveAnswers: action,
            setIsValidRequiredQuestions: action,
        });
    };

    generateUserId = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toLowerCase();

    setAnswer = (questionId, optionId, text = '') => {
        if (!this.answers[questionId]) {
            this.answers[questionId] = { questionId, optionId, text: '' };
        }

        this.answers[questionId].optionId = optionId;
        this.answers[questionId].text = text;
        this.setIsValidRequiredQuestions();
    }

    addCheckBoxAnswer = (questionId, optionId) => {
        this.answers[`${questionId}_${optionId}`] = { questionId, optionId, text: null };
        this.setIsValidRequiredQuestions();
    }

    deleteCheckBoxAnswer = (questionId, optionId) => {
        delete this.answers[`${questionId}_${optionId}`];
        this.setIsValidRequiredQuestions();
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

    setIsValidRequiredQuestions = () => {
        const requiredIds = QuestionStore.requiredQuestionsIds();

        for (const questionId of requiredIds) {
            if (!(Object.values(this.answers).find(answer => answer?.questionId === questionId))) {
                this.isValidRequiredQuestions = false;
                return;
            }
        }

        this.isValidRequiredQuestions = true;
    }
}


export default new AnswerStore();
