import React from 'react';
import {observer} from "mobx-react";


function Option({label}) {
    return (
        <label>
            <input type={'checkbox'} value={label}/>
            <span className={'checkbox-label'}>{label}</span>
        </label>
    );
}


export default observer(Option);
