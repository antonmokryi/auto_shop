import React from 'react';
import style from "./BasketItem.module.css";
import BasketItemQuantity from "./BasketItemQuantity/BasketItemQuantity.jsx";
import { CgCloseR } from "react-icons/cg";
import createPrice from "../../../data/info.js";
import {useBasketStore} from "../../../app/store/useBasketStore.js";

const BasketItem = ({product}) => {
    const removeItem = useBasketStore(basket => basket.removeItem);
    return (
        <article className={style.basketItem}>
            <div className={style.basketItem__img} style={{backgroundImage: `url(${product.itemLogo})`}}></div>
            <div className={style.basketItem__info}>
                <h5>{product.ua.name}</h5>
                <p>Aртикуль: {product.itemUUID}</p>
            </div>
            <span className={style.basketItem__price}>{createPrice(product.itemPrice)}/од.</span>
            <BasketItemQuantity quantity={product.quantity} id={product.itemUUID} />
            <CgCloseR  className={style.basketItem__icon} onClick={()=>removeItem(product.itemUUID)}/>
        </article>
    );
};

export default BasketItem;