import React from 'react';


function Opt({option, text}) {
    return (
        <p>- {option ? `${option} ${text ? `(${text})`: ''}` : `${text}`}</p>
    );
}

export default Opt;
