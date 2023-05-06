import React from 'react';
import './Button.css';

function Button({label, onClick, isDisabled}) {
    console.log('render', isDisabled);
    return <button className={isDisabled ? '--disabled' : ''} onClick={onClick} disabled={isDisabled}>{label}</button>;
}

export default Button;
