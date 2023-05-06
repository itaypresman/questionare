import React, {useEffect} from 'react';
import TextQuestion from '../../common/TextQuestion';
import QuestionsStore from "@stores/QuestionStore";
import {observer} from 'mobx-react';
import './QuestionsPage.css';
import RadioQuestion from '@components/common/RadioQuestion';
import CheckBoxQuestion from '@components/common/CheckBoxQuestion';
import Button from '@components/common/Button';
import AnswerStore from "@stores/AnswerStore";
import {useNavigate} from "react-router";


function QuestionsPage() {
    const navigate = useNavigate();

    useEffect(() => {
        QuestionsStore.loadQuestions();
    }, []);

    useEffect(() => {
        if (AnswerStore.userId) {
            navigate(`/${AnswerStore.userId}`);
        }
    }, [AnswerStore.userId]);

    const questions = QuestionsStore.questions.map((question, i) => {
        switch (question.type) {
            case 'text':
                return <TextQuestion
                    question={question.text}
                    key={`${question.id}_${i}`}
                    num={i + 1}
                    isRequired={question.is_required}
                    questionId={question.id}
                />;
            case 'single':
                return <RadioQuestion
                    question={question.text}
                    key={`${question.id}_${i}`}
                    num={i + 1}
                    options={question.options}
                    isRequired={question.is_required}
                    questionId={question.id}
                />;
            case 'multiple':
                return <CheckBoxQuestion
                    question={question.text}
                    key={`${question.id}_${i}`}
                    num={i + 1} options={question.options}
                    isRequired={question.is_required}
                    questionId={question.id}
                />;
            default:
                return null;
        }
    });

    const onSendClick = () => {
        AnswerStore.saveAnswers();
    };

    return (
        <>
            <div>
                <h1>Questionnaire</h1>

                {questions}

                <Button label={'Send'} onClick={onSendClick} isDisabled={!AnswerStore.isValidRequiredQuestions}/>
            </div>
        </>
    );
}

export default observer(QuestionsPage);
