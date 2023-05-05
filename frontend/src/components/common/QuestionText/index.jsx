import React from 'react';
import './QuestionText.css';
import Required from "@components/common/QuestionText/Required";


function TextQuestion({num, question, isRequired}) {
    return <p className={'question-text'}>Question {num}: {question}<Required isRequired={isRequired}/></p>
}


export default TextQuestion;
