import React from 'react';
import style from './HeroCatalog.module.css';
import "../../index.css";
import catalog from "./HeroCatalog.json";
import {useNavigate} from "react-router-dom";

const HeroCatalog = () => {
    const navigate = useNavigate();
    return (
        <section className={style.HeroCatalog}>
            <div className="container">
                <h2 className={style.HeroCatalog_title}>Каталог</h2>
                <p className={style.HeroCatalog_subtitle}>Ми пропонуємо найкращі ціни на продукцію!</p>
                <div className={style.HeroCatalog_category}>
                    {catalog.map(item => (
                        <article className={style.HeroCatalog_card} key={item.id}>
                                <img src={item.img} alt={item.name}/>
                                <div className={style.HeroCatalog_card__overlay}>
                                    <h3>{item.name}</h3>
                                    <button onClick={
                                        ()=>navigate(`/catalog?category=${item.url}`)
                                    }>Замовити</button>
                                </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroCatalog;