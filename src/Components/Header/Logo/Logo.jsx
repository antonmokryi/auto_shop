import React from 'react';
import logo from '../../../assets/header/logo1.png';
import style from './Logo.module.css';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className={style.logo} aria-label="Pro Auto">
            <img src={logo} alt="Pro Auto logo"/>
            <span className={style.redLine}></span>
            <span className={style.text}>
                <span className={style.pro}>PRO</span>
                <span className={style.auto}>AUTO</span>
            </span>
        </Link>
    );
};

export default Logo;
