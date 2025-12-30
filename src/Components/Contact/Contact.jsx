import React from 'react';
import Button from "../button/Button.jsx";
import style from "./Contact.module.css";
import { RiCloseCircleFill } from "react-icons/ri";

const Contact = () => {

    return (
        <section className={style.contact}>
            <RiCloseCircleFill />
            <div className={style.content}>
                <form className={style.contact_items}>
                    <div>
                        <label htmlFor="name">Ім'я</label>
                        <input type="text" id="name" placeholder=""/>
                    </div>
                    <div>
                        <label htmlFor="num">Телефон або Telegram</label>
                        <input type="text" id="num" placeholder="ОБОВ'ЯЗКОВО"/>
                    </div>
                    <textarea rows="5" cols="50" placeholder="Напишіть питання тут"></textarea>
                    <Button type="submit" text={"Відправити"}/>
                </form>
            </div>
        </section>
    );
};

export default Contact;