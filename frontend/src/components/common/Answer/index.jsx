import React from 'react';
import QuestionText from "@components/common/QuestionText";
import Opt from "@components/common/Answer/Opt";


function Answer({question, num, answers}) {
    const opts = answers.map(answer => <Opt key={answer.id} text={answer.text} option={answer?.option?.text}/>);
    return (
        <>
            <QuestionText question={question} num={num}/>
            {opts}
        </>
    );
}

export default Answer;
