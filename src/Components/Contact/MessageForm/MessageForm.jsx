import React, {useState} from 'react';
import Button from "../../button/Button.jsx";
import style from "./messageForm.module.css";
import sendMessage from "../../../api/telegram.js";
import Loader from "../../Loader/Loader.jsx";

const MessageForm = ({setError, setSuccessfullSend}) => {
    const data = {
        name: "",
        num: "",
        message: ""
    }
    const [formData, setFormData] = useState(data)
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.name && formData.num && formData.message) {
            setLoading(true)
            setError(false)
            await sendMessage(formData);
            setFormData(data)
            setLoading(false)
            setSuccessfullSend(true)
        } else {
            setError(true);
        }
    }
    return (
        <section className={`${style.contact}`}>
            <div className={style.content}>
                <form className={style.contact_items}>
                    {loading && <Loader />}
                    <div>
                        <label htmlFor="name">Ім'я</label>
                        <input type="text" id="name"
                               name="name"
                               value={formData.name}
                               onChange={handleChange}
                               placeholder=""/>
                    </div>
                    <div>
                        <label htmlFor="num">Телефон або Telegram</label>
                        <input type="text" id="num"
                               name="num"
                               value={formData.num}
                               onChange={handleChange}
                               placeholder="ОБОВ'ЯЗКОВО"/>
                    </div>
                    <textarea rows="5" cols="50"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Напишіть питання тут"></textarea>
                    <Button type="submit" text={"Відправити"} onClick={handleSubmit}/>
                </form>
            </div>
        </section>
    );
};

export default MessageForm;