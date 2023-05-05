import React, {useEffect} from 'react';
import TextQuestion from '../../common/TextQuestion';
import QuestionsStore from "@stores/QuestionsStore";
import {observer} from 'mobx-react';
import './QuestionsPage.css';
import RadioQuestion from '@components/common/RadioQuestion';
import CheckBoxQuestion from '@components/common/CheckBoxQuestion';
import Button from '@components/common/Button';


function Index() {
    useEffect(() => {
        QuestionsStore.loadQuestions();
    }, []);

    const questions = QuestionsStore.questions.map((question, i) => {
        switch (question.type) {
            case 'text':
                return <TextQuestion question={question.text} key={i} num={i + 1} isRequired={question.is_required}/>;
            case 'single':
                return <RadioQuestion question={question.text} key={i} num={i + 1} options={question.options} isRequired={question.is_required}/>;
            case 'multiple':
                return <CheckBoxQuestion question={question.text} key={i} num={i + 1} options={question.options} isRequired={question.is_required}/>;
            default:
                return null;
        }
    });

    return (
        <>
            <form>
                <h1>Questionnaire</h1>

                {questions}

                <Button label={'Send'} />
            </form>
        </>
    );
}

export default observer(Index);
