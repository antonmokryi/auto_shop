import React from 'react';
import "../../index.css"
import  style from './Page404.module.css'
import Button from "../button/Button.jsx";
import {useNavigate} from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate();
    return (
        <section
            style={{backgroundImage: "url('/images/Page404/404.png')"}}
            className={`${style.notfoundPage}`}>
            <div className={`container ${style.notfoundPage__content}`}>
                <h1>404</h1>
                <h2>СТОРІНКА <br/>
                    НЕ ЗНАЙДЕНА
                </h2>
                <p>Вибачте, такої сторінки немає на нашому сайті <br/>
                    Можливо ви ввели невірну адресу.
                </p>
                <Button text={"ПЕРЕЙТИ НА ГОЛОВНУ"} onClick={()=>navigate(`/catalog`)}/>
            </div>
        </section>
    );
};

export default Page404;