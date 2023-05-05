import React from 'react';


function Option({label}) {
    return (
        <label>
            <input type={'radio'} value={label}/>
            <span className={'radio-label'}>{label}</span>
        </label>
    );
}

export default Option;
