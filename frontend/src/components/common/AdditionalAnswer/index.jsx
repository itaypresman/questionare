import React from 'react';
import './AdditionalAnswer.css';

function AdditionalAnswer({}) {
    return (
        <div className={'text-input-container'}>
            <label>Why:</label>
            <input type={'text'}/>
        </div>
    );
}

export default AdditionalAnswer;
