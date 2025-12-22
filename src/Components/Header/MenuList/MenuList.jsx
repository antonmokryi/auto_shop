import React from 'react';
import style from './MenuList.module.css';

const MenuList = () => {
    return (
        <nav>
            <ul className={style.header_list}>
                <li><a className={style.header__link}>Каталог</a></li>
                <li><a className={style.header__link}>Інформація</a></li>
                <li><a className={style.header__link}>Контакт</a></li>
            </ul>
        </nav>
    );
};

export default MenuList;