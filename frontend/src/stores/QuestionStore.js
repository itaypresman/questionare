import { action, observable, makeObservable } from 'mobx';
import QuestionerApi from '@utils/questioner.api';


class QuestionStore {
    questions = [];

    constructor() {
        makeObservable(this, {
            questions: observable,

            loadQuestions: action,
        });
    };

    loadQuestions = () => {
        QuestionerApi.get('/questions').then(response => {
            this.questions = response.data?.data;
        }).catch(() => {});
    };

    isNeedExplanation = (questionId, optionId) => {
        const question = this.questions.find(question => question.id === questionId);

        if (!question) {
            return false;
        }

        const option = question.options.find(opt => opt.id === optionId);

        return !!option?.need_explanation;
    }
}


export default new QuestionStore();
