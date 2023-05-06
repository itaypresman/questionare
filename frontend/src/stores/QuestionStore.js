import { action, observable, makeObservable } from 'mobx';
import QuestionerApi from '@utils/questioner.api';


class QuestionStore {
    questions = [];

    constructor() {
        makeObservable(this, {
            questions: observable,

            loadQuestions: action,
            setQuestions: action,
        });
    };

    setQuestions = questions => {
        this.questions = questions;
    };

    loadQuestions = () => {
        QuestionerApi.get('/questions').then(response => {
            this.setQuestions(response.data?.data);
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

    requiredQuestionsIds = () => this.questions.filter(question => question.is_required).map(question => question.id);
}


export default new QuestionStore();
