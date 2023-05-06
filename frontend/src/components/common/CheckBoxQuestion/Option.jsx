import React from 'react';
import {observer} from "mobx-react";
import AnswerStore from '@stores/AnswerStore';


function Option({label, questionId, optionId}) {
    const onCheckBoxClick = e => {
        if (e.target.checked) {
            AnswerStore.addCheckBoxAnswer(questionId, optionId);
            return;
        }

        AnswerStore.deleteCheckBoxAnswer(questionId, optionId);
    };

    return (
        <label>
            <input type={'checkbox'} value={label} onChange={onCheckBoxClick}/>
            <span className={'checkbox-label'}>{label}</span>
        </label>
    );
}


export default observer(Option);
