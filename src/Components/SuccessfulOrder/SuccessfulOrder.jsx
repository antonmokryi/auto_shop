import React from 'react';
import SuccessfulOrderBtn from "./SuccessfulOrderBtn/SuccessfulOrderBtn.jsx";
import "../../index.css"
import style from "./SuccessfulOrder.module.css"
import {useNavigate, useLocation} from "react-router-dom";

const SuccessfulOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { orderNumber } = location.state || {};
    return (
        <section className="container">
            <div className={style.content}>
                <div
                    className={style.img}
                    style={{backgroundImage: `url('/images/SuccessfulOrder/successfulOrderGirl.png')`}}></div>
                <div className={style.information}>
                    <h2>Вашу замовлення {orderNumber} успішно сформовано</h2>
                    <p>Дякуємо Вам за вибір нашої компанії,
                        в найближчий час менеджери зв'яжуться з Вами,  та нададуть відповіді на всі запитання</p>
                    <div className={style.buttons}>
                        <SuccessfulOrderBtn onClick={()=>navigate('/')} text="НА ГОЛОВНУ"/>
                        <SuccessfulOrderBtn onClick={()=>navigate('/catalog')} text="ДО КАТАЛОГУ"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessfulOrder;