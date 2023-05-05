import React from 'react';
import QuestionText from '@components/common/QuestionText';
import Option from './Option';
import AdditionalAnswer from '@components/common/AdditionalAnswer';
import './CheckBoxQuestion.css';
import {observer} from "mobx-react";


function CheckBoxQuestion({question, num, options, isRequired, questionId}) {
    const answers = options.map(option => <Option key={option.id} label={option.text}/>);

    return (
        <>
            <QuestionText question={question} num={num} isRequired={isRequired}/>
            {answers}
            <AdditionalAnswer questionId={questionId}/>
        </>
    );
}

export default observer(CheckBoxQuestion);
