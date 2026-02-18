import React from 'react';
import style from './BasketItemQuantity.module.css';
import {useBasketStore} from "../../../../app/store/useBasketStore.js";

const BasketItemQuantity = ({quantity, id}) => {
    const decreaseQuantity = useBasketStore(basket=> basket.decreaseQuantity);
    const increaseQuantity = useBasketStore(basket=> basket.increaseQuantity);
    return (
        <div className={style.basketItemQuantity}>
            <button onClick={() => decreaseQuantity(id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => increaseQuantity(id)}>+</button>
        </div>
    );
};

export default BasketItemQuantity;