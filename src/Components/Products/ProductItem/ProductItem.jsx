import React from 'react';
import style from './ProductItem.module.css';
import procent from '../../../data/info.js'

const ProductItem = ({ product }) => {
    return (
        <article className={style.productItem}>
            <div className={style.productItem_img} style={{
                backgroundImage:
                `url(${product.itemLogo ? product.itemLogo : "/images/ProductItem/default.jpeg"})`
                }}></div>
            <h3>{product.ua.name}</h3>
            <div  className={style.productItem_container}>
                <h4>Артикуль: {product.itemUUID}</h4>
                <p>Ціна {(Number(product.itemPrice) * procent).toFixed(2)} грн.</p>
            </div>
            {/*<p>{product.ua.content.slice(0,40)} ...</p>*/}
            <button className={style.productItem_btn}>КУПИТИ</button>
        </article>
    );
};

export default ProductItem;