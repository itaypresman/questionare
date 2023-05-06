import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import Button from '@components/common/Button';
import AnswerStore from '@stores/AnswerStore';
import {useNavigate, useParams} from 'react-router';
import Answer from "@components/common/Answer";



function AnswersPage() {
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        AnswerStore.loadUserAnswers(userId);
    }, []);

    const onBtnClick = () => {
        AnswerStore.userId = null;
        navigate('/');
    };

    const answers = AnswerStore.userAnswers.map((answer, i)=> <Answer
        question={answer.text}
        key={`${answer.id}_${i}`}
        num={i + 1}
        answers={answer.answers}
    />);

    return (
        <>
            <div>
                <h1>Answers</h1>
                {answers}

                <Button label={'Go back'} onClick={onBtnClick}/>
            </div>
        </>
    );
}

export default observer(AnswersPage);
