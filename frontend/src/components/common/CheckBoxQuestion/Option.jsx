import React from 'react';


function Option({label}) {
    return (
        <label>
            <input type={'checkbox'} value={label}/>
            <span className={'checkbox-label'}>{label}</span>
        </label>
    );
}


export default Option;
