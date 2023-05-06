import { action, observable, makeObservable } from 'mobx';
import QuestionerApi from '@utils/questioner.api';
import QuestionStore from '@stores/QuestionStore';


class AnswerStore {
    userId = null;
    answers = [];
    userAnswers = [];
    isValidRequiredQuestions = false;

    constructor() {
        makeObservable(this, {
            answers: observable,
            userAnswers: observable,
            isValidRequiredQuestions: observable,
            userId: observable,

            setAnswer: action,
            addCheckBoxAnswer: action,
            deleteCheckBoxAnswer: action,
            saveAnswers: action,
            setIsValidRequiredQuestions: action,
            loadUserAnswers: action,
            setUserAnswers: action,
        });
    };

    generateUserId = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toLowerCase();

    setAnswer = (questionId, optionId, text = '') => {
        console.log(this.answers[questionId]?.text)

        if (!this.answers[questionId]) {
            this.answers[questionId] = { questionId, optionId, text };
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
        const userId = this.generateUserId();
        const data = {
            userId,
            answers: Object.values(this.answers).filter(item => item),
        };

        QuestionerApi.post('/answers/save', data).then(res => {
            if (res.data.status) {
                this.userId = userId;
                this.answers = [];
            }
        });
    };

    getOptionId = questionId => this.answers[questionId]?.optionId || null;

    setIsValidRequiredQuestions = () => {
        const requiredIds = QuestionStore.requiredQuestionsIds();

        for (const questionId of requiredIds) {
            if (!(Object.values(this.answers).find(answer => answer?.questionId === questionId))) {
                this.isValidRequiredQuestions = false;
                return;
            }
        }

        this.isValidRequiredQuestions = true;
    };

    loadUserAnswers = userId => {
        QuestionerApi.get(`/answers/${userId}`).then(response => {
            this.setUserAnswers(response.data?.data);
        }).catch(() => {});
    };

    setUserAnswers = userAnswers => {
        this.userAnswers = userAnswers;
    }
}


export default new AnswerStore();
