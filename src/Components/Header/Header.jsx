import React from 'react';
import style from './Header.module.css';
import Logo from "./Logo/Logo.jsx";
import MenuList from "./MenuList/MenuList.jsx";
import "../../index.css";
import Icons from "./Icons/Icons.jsx";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${style.header_block} wrapper`}>
                <Logo/>
                <MenuList/>
                <Icons/>
            </div>
        </header>
    );
};

export default Header;