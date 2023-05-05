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
}


export default new QuestionStore();
