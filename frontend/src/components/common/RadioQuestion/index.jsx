import React from 'react';
import './RadioQuestion.css';
import QuestionText from '@components/common/QuestionText';
import Option from '@components/common/RadioQuestion/Option';
import AdditionalAnswer from '@components/common/AdditionalAnswer';
import {observer} from "mobx-react";


function RadioQuestion({question, num, options, isRequired, questionId}) {
    const answers = options.map(option => <Option key={option.id} label={option.text} questionId={questionId} optionId={option.id}/>);

    return (
        <>
            <QuestionText question={question} num={num} isRequired={isRequired}/>
            {answers}
            <AdditionalAnswer questionId={questionId}/>
        </>
    );
}

export default observer(RadioQuestion);
