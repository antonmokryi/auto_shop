import React from 'react';
import style from './ProductPage.module.css';
import "../../index.css"
import product from '../../data/example.js';
import procent from "../../data/info.js";
import Button from "../button/Button.jsx";
const ProductPage = () => {
    return (
        <section className={style.productPage}>
            <div className="wrapper">
                <div className={style.productPage_content}>
                    <div className={style.productPage_image}>
                        <img src={product.itemLogo} alt={product.itemBrand}/>
                    </div>

                    <div className={style.productPage_info}>
                        <h2>{product.ua.name}</h2>
                        <p>Номер товару: {product.itemUUID}</p>
                        <p>Бренд: "{product.itemBrand}"</p>
                        <p>Ціна {Number(product.itemPrice) * procent} грн.</p>
                        <Button text="Додати в корзину"/>
                        <p>{product.ua.content}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;