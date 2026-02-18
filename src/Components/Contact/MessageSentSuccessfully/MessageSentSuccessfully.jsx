import React from 'react';
import style from './messageSentSuccessfully.module.css';
const MessageSentSuccessfully = () => {
    return (
        <>
            <div className={style.img} style={{backgroundImage: `url("/images/Contact/messageSend.png")`}}></div>
        </>
    );
};

export default MessageSentSuccessfully;