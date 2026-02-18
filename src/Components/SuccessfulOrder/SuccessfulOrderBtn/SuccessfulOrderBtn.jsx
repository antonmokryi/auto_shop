import React from 'react';
import style from './SuccessfulOrderBtn.module.css';
const SuccessfulOrderBtn = ({text, onClick}) => {
    return (
        <>
            <button className={style.btn} onClick={onClick}>{text}</button>
        </>
    );
};

export default SuccessfulOrderBtn;