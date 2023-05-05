import React from 'react';
import QuestionText from '@components/common/QuestionText';
import Option from './Option';
import AdditionalAnswer from '@components/common/AdditionalAnswer';
import './CheckBoxQuestion.css';


function RadioQuestion({num, question, options}) {
    const answers = options.map(option => <Option label={option.text}/>);

    return (
        <>
            <QuestionText question={question} num={num}/>
            {answers}
            <AdditionalAnswer/>
        </>
    );
}

export default RadioQuestion;
