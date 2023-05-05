import React from 'react';
import AnswerStore from "@stores/AnswerStore";
import {observer} from "mobx-react";


function Option({label, questionId, optionId}) {
    const isChecked = optionId === AnswerStore.answers[questionId]?.optionId;
    const onRadioClick = () => {
        AnswerStore.setAnswer(questionId, optionId);
    };

    return (
        <label>
            <input type={'radio'} value={label} checked={isChecked} onChange={onRadioClick}/>
            <span className={'radio-label'}>{label}</span>
        </label>
    );
}

export default observer(Option);
