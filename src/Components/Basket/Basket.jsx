import React from 'react';
import "../../index.css"
import EmptyBasket from "./EmptyBasket/EmptyBasket.jsx";
import BasketItem from "./BasketItem/BasketItem.jsx";
import style from "./Basket.module.css"
import {useBasketStore} from "../../app/store/useBasketStore.js";
import {useNavigate} from "react-router-dom";

const Basket = () => {
    const list = useBasketStore(state => state.basketStore)
    const totalPrice = useBasketStore(state => state.totalPrice())
    const {toggleBasket} = useBasketStore()
    const navigate = useNavigate();
    const handleToOrder = () => {
        if (list.length > 0) {
            toggleBasket()
            navigate('/create_order')
        }else {
            console.log('Кошик порожній!');
        }
    }
    return (
        <section className={style.basket}>
            <div className={`container ${style.basket__content}`}>
                <h1>КОРЗИНА</h1>
                <section className={style.basket__content_items}>
                    {list.length > 0 ?
                        list.map((product, index) => (<BasketItem key={index} product={product} />))
                        : <EmptyBasket />}
                </section>
                <div className={style.basket__content_footer}>
                    <button onClick={()=>toggleBasket()}>ПРОДОВЖИТИ ПОКУПКИ</button>
                    <div className={style.basket__content_summary}>
                        <h3>Разом: {totalPrice.toFixed(2)} грн</h3>
                        <button onClick={handleToOrder}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;