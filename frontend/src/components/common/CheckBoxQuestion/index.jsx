import React from 'react';
import QuestionText from '@components/common/QuestionText';
import Option from './Option';
import './CheckBoxQuestion.css';
import {observer} from "mobx-react";


function CheckBoxQuestion({question, num, options, isRequired, questionId}) {
    const answers = options.map(option => <Option key={option.id} label={option.text} optionId={option.id} questionId={questionId}/>);

    return (
        <>
            <QuestionText question={question} num={num} isRequired={isRequired}/>
            {answers}
        </>
    );
}

export default observer(CheckBoxQuestion);
