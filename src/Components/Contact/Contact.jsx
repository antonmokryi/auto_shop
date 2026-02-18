import React, {useState} from 'react';
import style from "./Contact.module.css";
import "../../index.css"
import MessageForm from "./MessageForm/MessageForm.jsx";
import ContactInformation from "./ContactInformation/ContactInformation.jsx";
import MessageSentSuccessfully from "./MessageSentSuccessfully/MessageSentSuccessfully.jsx";

const Contact = () => {
    const [error, setError] = useState(false)
    const [successfulSend, setSuccessfulSend] = useState(false)
    return (
        <section className={`container ${style.section}`}>
            <h2>Контакти</h2>
            {error && <h3>Заповніть всі поля!</h3>}
            <div className={`${style.contact}`}>
                {successfulSend
                    ? <MessageSentSuccessfully/>
                    : <MessageForm setError={setError} setSuccessfullSend={setSuccessfulSend} />
                }
                <ContactInformation/>
            </div>
        </section>
    );
};

export default Contact;