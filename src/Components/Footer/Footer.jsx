import React from 'react';
import Logo from '../Header/Logo/Logo.jsx';
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import {email, phoneNumber} from "../../data/Contact.js";
import style from './Footer.module.css';
import ContactInformation from "../Contact/ContactInformation/ContactInformation.jsx";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footer__block}>
                    <div className={style.footer_leftSide}>
                        <Logo className={style.footer_leftSide__logo}/>
                        <h3 className={style.footer_leftSide__title}>© 2019 PRO Auto. <br/>
                            Всі права захищені.</h3>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;