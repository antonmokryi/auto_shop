import React from 'react';
import style from './Hero.module.css';
import '../../index.css'

const Hero = () => {
    return (
        <section className={style.Hero}>
            <div className={`wrapper`}>
                <div className={style.Hero_wellcome}>
                    <h1 className={style.Hero_title}>
                        ЯКІСНІ АВТОМОБІЛЬНІ ТОВАРИ <br/>
                        ЗА ЦІНАМИ ПОСТАЧАЛЬНИКІВ
                    </h1>
                    <button className={style.Hero_btn}>ПЕРЕЙТИ В КАТАЛОГ</button>
                </div>
            </div>
        </section>

    );
};

export default Hero;