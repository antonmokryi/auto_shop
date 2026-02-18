import React, {useEffect, useState} from 'react';
import styles from "../CreateOrder.module.css"
import {useBasketStore} from "../../../app/store/useBasketStore.js";
import sendMessage from "../../../api/telegram.js";
import createPrice from "../../../data/info.js";
import {useNavigate} from "react-router-dom";
import createOrderNumber from "../../../data/createOrderNumber.js";

const OrderForm = () => {
    const productsList = useBasketStore(basket => basket.basketStore)
    const clearBasket = useBasketStore(basket => basket.clearBasket)
    const totalPrice = useBasketStore(basket => basket.totalPrice())
    const navigate = useNavigate();

    const [err, setErr] = useState(false)
    const initialState = {
        orderNum: createOrderNumber(),
        name: "",
        number: "",
        city: "",
        postNumber: "",
        payType: "",
        products: []
    }
    const [info, setInfo] = useState(initialState)
    const handleChange = (e) => {
        const {name, value} = e.target
        setInfo(prev => ({...prev, [name]: value}))
    }
    const messageInterface = (info) => {

        const productItem = info.products.map((p, index) =>
            `${index + 1}) | Артикуль: ${p.itemUUID} | Назва: ${p.ua.name} \n 
            | ${p.quantity}/од. * ${createPrice(p.itemPrice)} грн. = ${p.quantity * createPrice(p.itemPrice)}
            _________________________________ \n
            `
        )
        return `
    *Нове замовлення! № ${info.orderNum}*

👤 ПІБ: ${info.name}
📞 Телефон: ${info.number}
🏙 Місто: ${info.city}
🏤 Відділення Нової Пошти: ${info.postNumber}
💳 Оплата: ${info.payType}
    🛒 ТОВАРИ:
    ${productItem}
    _______________________________________
    |Кінцевий рахунок: ${totalPrice}       |
    ________________________________________
`
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) {
            console.log("Форма заповнена неправильно")
            return
        }
        const interfaceMessage = messageInterface(info)
        try {
            const orderNumber = info.orderNum;
            await sendMessage(interfaceMessage)
            setInfo(initialState)
            clearBasket()
            useBasketStore.persist.clearStorage()
            navigate('/successful_order', { state: { orderNumber } });
        } catch (error) {
            console.log(error)
        }
    }
    const validateForm = () => {
        const errors = {}

        if (!info.name.trim()) errors.name = "Введіть ПІБ"
        if (!info.number.trim()) errors.number = "Введіть Номер телефона"
        if (!info.city.trim()) errors.city = "Введіть назву міста"
        if (!info.postNumber) errors.postNumber = "Введіть номер відділення нової пошти"
        if (!info.payType.trim()) errors.payType = "Оберіть тип оплати"

        setErr(errors)

        return Object.keys(errors).length === 0
    }

    useEffect(() => {
        setInfo(prevInfo => ({
            ...prevInfo, products: productsList
        }))
    }, [productsList])

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                {err.name && <p className={styles.error}>{err.name}</p>}
                <label className={styles.label}>ПІБ</label>
                <input className={styles.input}
                       name="name"
                       onChange={handleChange} value={info.name}
                       type="text" placeholder="Ім'я та прізвище"/>

                {err.number && <p className={styles.error}>{err.number}</p>}
                <label className={styles.label}>Номер телефона</label>
                <input className={styles.input}
                       name="number"
                       onChange={handleChange} value={info.number}
                       type="text" placeholder="+380..."/>

                {err.city && <p className={styles.error}>{err.city}</p>}
                <label className={styles.label}>Місто доставки</label>
                <input className={styles.input}
                       name="city"
                       onChange={handleChange} value={info.city}
                       type="text" placeholder="Ваше місто"/>

                {err.postNumber && <p className={styles.error}>{err.postNumber}</p>}
                <label className={styles.label}>Відділення Нової Пошти</label>
                <input className={styles.input}
                       name="postNumber"
                       onChange={handleChange} value={info.postNumber}
                       type="text" placeholder="Номер відділення"/>

                {err.payType && <p className={styles.error}>{err.payType}</p>}
                <label className={styles.label}>Оплата</label>
                <select className={styles.select}
                        name="payType"
                        onChange={handleChange} value={info.payType}>
                    <option value="" disabled hidden>Оберіть спосіб оплати</option>
                    <option value="Накладний">Накладний платіж</option>
                    <option value="На рахунок">Переказ на рахунок</option>
                </select>
            </div>
            <button className={styles.btn}
                    type="submit">ОФОРМИТИ ЗАМОВЛЕННЯ
            </button>
        </form>
    );
};

export default OrderForm;