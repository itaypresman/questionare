import React from 'react';


function Required({isRequired}) {
    if (!isRequired) {
        return null;
    }

    return <span className={'required'}>*</span>
}


export default Required;
