import React from 'react';
import './RadioQuestion.css';
import QuestionText from '@components/common/QuestionText';
import Option from '@components/common/RadioQuestion/Option';
import AdditionalAnswer from '@components/common/AdditionalAnswer';


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
