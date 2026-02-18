import React, {useEffect} from 'react';
import style from './ProductPage.module.css';
import "../../index.css"
import Button from "../button/Button.jsx";
import createPrice from "../../data/info.js";
import {useLocation} from "react-router-dom";
import {useBasketStore} from "../../app/store/useBasketStore.js";
const ProductPage = () => {
    const location = useLocation();
    const {product} = location.state || {};
    const addItem = useBasketStore(basket => basket.addItem);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleToBasket = (productItem) => {
        addItem({...productItem, quantity: 1});
    }
    if (!product) {
        return <p>Товар не знайдено</p>;
    }
    return (
        <section className={style.productPage}>
            <div className="container">
                <div className={style.productPage_content}>
                    <div className={style.productPage_image}>
                        <img src={product.itemLogo} alt={product.itemBrand}/>
                    </div>

                    <div className={style.productPage_info}>
                        <h2>{product.ua.name}</h2>
                        <p>Номер товару: {product.itemUUID}</p>
                        <p>Бренд: "{product.itemBrand}"</p>
                        <p>Ціна {createPrice(product.itemPrice)} грн.</p>
                        <Button text="Додати в корзину" onClick={()=>handleToBasket(product)} />
                        <p>{product.ua.content}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;