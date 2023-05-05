import React from 'react';
import './QuestionText.css';


function TextQuestion({num, question, isRequired}) {
    return <p className={'question-text'}>Question {num}: {question}</p>
}


export default TextQuestion;
