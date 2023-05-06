import React from 'react';
import './AdditionalAnswer.css';
import AnswerStore from "@stores/AnswerStore";
import QuestionStore from "@stores/QuestionStore";
import {observer} from "mobx-react";

function AdditionalAnswer({questionId}) {
    const optionId = AnswerStore.getOptionId(questionId);
    const isNeedExplanation = QuestionStore.isNeedExplanation(questionId, optionId);
    const hiddenClass = !isNeedExplanation ? '--hidden' : null;

    const onAnswerChange = e => {
        AnswerStore.setAnswer(questionId, optionId, e.target.value);
    };

    return (
        <div className={`text-input-container ${hiddenClass}`}>
            <label>Why:</label>
            <input type={'text'} onChange={onAnswerChange} value={AnswerStore.answers[questionId]?.text || ''}/>
        </div>
    );
}

export default observer(AdditionalAnswer);
