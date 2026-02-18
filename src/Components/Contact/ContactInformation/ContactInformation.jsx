import React from 'react';
import {FiPhoneCall} from "react-icons/fi";
import {email, phoneNumber} from "../../../data/Contact.js";
import {AiOutlineMail} from "react-icons/ai";
import style from "../../Footer/Footer.module.css";

const ContactInformation = () => {
    return (
        <>
            <address className={style.footer_rightSide}>
                <p className={style.contactItem}>
                    <FiPhoneCall className={style.icon}/>
                    {phoneNumber}
                </p>
                <p className={style.contactItem}>
                    <AiOutlineMail className={style.icon}/>
                    {email}
                </p>
            </address>
        </>
    );
};

export default ContactInformation;