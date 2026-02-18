import React from 'react';
import style from './ProductItem.module.css';
import {useBasketStore} from "../../../app/store/useBasketStore.js";
import createPrice from "../../../data/info.js";
import {Link} from "react-router-dom";

const ProductItem = ({ product }) => {
    const addItem = useBasketStore(basket => basket.addItem);
    const handleToBasket = (productItem) => {
        addItem({...productItem, quantity: 1});
    }
    const imgUrl = product.itemLogo.length > 0
        ? product.itemLogo
        : "/images/ProductItem/default.jpeg";

    return (
        <article className={style.productItem}>
            <div className={style.productItem_img} style={{
                backgroundImage:
                `url(${imgUrl})`
                }}></div>
            <Link to={`/product_page/${product.itemUUID}`} state={{product}}>
                <h3>{product.ua.name.slice(0, 30)}...</h3>
            </Link>
            <div  className={style.productItem_container}>
                <h4>Артикуль: {product.itemUUID}</h4>
                <p>Ціна {createPrice(product.itemPrice)} грн.</p>
            </div>
            <button className={style.productItem_btn} onClick={()=>handleToBasket(product)}>КУПИТИ</button>
        </article>
    );
};

export default ProductItem;