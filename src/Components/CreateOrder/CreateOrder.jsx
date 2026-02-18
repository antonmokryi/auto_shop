import React from 'react';
import "../../index.css"
import OrderForm from "./OrderForm/OrderForm.jsx";
import style from "./CreateOrder.module.css";
import OrderItemsList from "./OrderItemsList/OrderItemsList.jsx";

const CreateOrder = () => {
    return (
        <section>
            <div className={`container`}>
                <h1>Оформлення замовленя</h1>
                <div className={style.content}>
                    <OrderItemsList/>
                    <OrderForm/>
                </div>
            </div>
        </section>
    );
};

export default CreateOrder;