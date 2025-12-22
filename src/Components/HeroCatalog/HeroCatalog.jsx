import React from 'react';
import style from './HeroCatalog.module.css';
import "../../index.css";
import catalog from "./HeroCatalog.json";

const HeroCatalog = () => {
    return (
        <section className={style.HeroCatalog}>
            <div className="wrapper">
                <h2 className={style.HeroCatalog_title}>Каталог</h2>
                <p className={style.HeroCatalog_subtitle}>Ми пропонуємо накращі ціни на продукцію!</p>
                <div className={style.HeroCatalog_category}>
                    {catalog.map(item => (
                        <article className={style.HeroCatalog_card} key={item.id}>
                            <a href="#">
                                <img src={item.img} alt={item.name}/>
                                <div className={style.HeroCatalog_card__overlay}>
                                    <h3>{item.name}</h3>
                                    <button>Замовити</button>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroCatalog;