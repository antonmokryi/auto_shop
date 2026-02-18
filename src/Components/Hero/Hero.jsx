import React from 'react';
import style from './Hero.module.css';
import '../../index.css'
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className={style.Hero}>
            <div className={`container`}>
                <div className={style.Hero_wellcome}>
                    <h1 className={style.Hero_title}>
                        ЯКІСНІ АВТОМОБІЛЬНІ ТОВАРИ <br/>
                        ЗА ЦІНАМИ ПОСТАЧАЛЬНИКІВ
                    </h1>
                    <button className={style.Hero_btn}
                    onClick={()=>navigate(`/catalog`)}
                    >ПЕРЕЙТИ В КАТАЛОГ</button>
                </div>
            </div>
        </section>

    );
};

export default Hero;