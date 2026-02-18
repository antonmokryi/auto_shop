import React from 'react';
import {useBasketStore} from "../../../app/store/useBasketStore.js";
import style from "./OrderItemsList.module.css";
import basket from "../../Basket/Basket.jsx";
import createPrice from "../../../data/info.js";


const OrderItemsList = () => {
    const basketItems = useBasketStore(basket=> basket.basketStore);
    const totalPrice = useBasketStore(basket=> basket.totalPrice());
    return (
        <div className={style.itemList}>
            <div className={style.items}>
                {basketItems && basketItems.map((basketItem) => (
                    <article className={style.item} key={basketItem.itemUUID}>
                        <div     className={style.itemImage} style={{backgroundImage: `url(${basketItem.itemLogo})`}}></div>
                        <h5>{basketItem.ua.name}</h5>
                        <h5>{createPrice(basketItem.itemPrice)}грн. X {basketItem.quantity}/од. = {
                            createPrice(basketItem.itemPrice) * basketItem.quantity
                        }</h5>

                    </article>
                ))}
            </div>
            <h4>До сплати: {totalPrice.toFixed(2)}</h4>
        </div>
    );
};

export default OrderItemsList;