import React from 'react';
import style from './ErrorConnect.module.css';
const ErrorConnect = () => {
    return (
        <>
            <div className={style.img}
                style={{backgroundImage: `url("/images/ErrorConnect/errorConnect.png")`}}>
                <p>Проблеми з сервером: <br/>
                    Перезагрузіть сторінку та <br/>перевірте інтернет підключання!
                </p>
            </div>
        </>
    );
};

export default ErrorConnect;