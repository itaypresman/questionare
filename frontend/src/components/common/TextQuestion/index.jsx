import React from 'react';
import './TextQuestion.css';
import QuestionText from '@components/common/QuestionText';
import AnswerStore from "@stores/AnswerStore";
import {observer} from "mobx-react";


function TextQuestion({questionId, num, question, isRequired}) {
    const onAnswerChange = e => {
        AnswerStore.setAnswer(questionId, null, e.target.value);
    };

    return (
        <>
            <QuestionText question={question} num={num} isRequired={isRequired}/>
            <input
                className={'text-answer'}
                type={'text'}
                placeholder={'Enter your answer'}
                value={AnswerStore.answers[questionId]?.text || ''}
                onChange={onAnswerChange}
            />
        </>
    );
}


export default observer(TextQuestion);
