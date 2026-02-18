import React from 'react';
import style from './EmptyBasket.module.css';
import {useNavigate} from "react-router-dom";
import {useBasketStore} from "../../../app/store/useBasketStore.js";
const EmptyBasket = () => {
    const navigate = useNavigate();
    const {toggleBasket} = useBasketStore()
    const handleToCatalog = () =>{
        toggleBasket()
        navigate('/catalog');
    }
    return (
        <section className={style.emptyBasket}>
            <div style={{backgroundImage: "url('/images/Basket/EmptyBasket.png')"}} className={style.emptyBasket__img}></div>
            <div className={style.emptyBasket__content}>
                <h2>Ваша корзина порожня</h2>
                <p>Виправити це просто: оберіть в каталозі товар та натисніть кнопку "В корзину"</p>
                <button onClick={handleToCatalog}>ДО КАТАЛОГУ</button>
            </div>
        </section>
    );
};

export default EmptyBasket;