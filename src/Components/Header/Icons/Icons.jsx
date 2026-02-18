import React from 'react';
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import style from "./Icons.module.css";
import {useBasketStore} from "../../../app/store/useBasketStore.js";

const Icons = () => {
    const basket = useBasketStore(basket=>basket.basketStore)
    const toggleBasket = useBasketStore(basket=>basket.toggleBasket)
    return (
            <div className={style.icons}>
                <FaSearch className={style.search} aria-hidden="true"/>
                <button
                    type="button"
                    className={style.basket}
                    onClick={toggleBasket}
                    aria-label="Open basket"
                >
                    <HiShoppingCart className={style.basket__icon} />
                    <span>{basket.length}</span>
                </button>
            </div>
    );
};

export default Icons;
