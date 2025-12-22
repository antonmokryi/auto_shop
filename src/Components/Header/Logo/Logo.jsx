import React from 'react';
import logo from '../../../assets/header/logo1.png';
import style from './Logo.module.css';

const Logo = () => {
    return (
        <div className={style.logo}>
            <img  src={logo} alt="Logo"/>
            <span className={style.redLine}></span>
            <div className={style.text}>
                <span className={style.pro}>PRO</span>
                <span className={style.auto}>AUTO</span>
            </div>
        </div>
    );
};

export default Logo;