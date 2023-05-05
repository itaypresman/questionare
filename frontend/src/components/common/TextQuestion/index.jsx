import React from 'react';
import './TextQuestion.css';
import QuestionText from '@components/common/QuestionText';


function TextQuestion({num, question}) {
    return (
        <>
            <QuestionText question={question} num={num}/>
            <input className={'text-answer'} type={'text'} placeholder={'Enter your answer'}/>
        </>
    );
}


export default TextQuestion;
