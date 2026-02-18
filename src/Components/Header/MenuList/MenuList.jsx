import React from 'react';
import style from './MenuList.module.css';
import {Link} from "react-router-dom";
import menu from "../../../data/HeaderMenu.js"

const MenuList = () => {

    return (
        <nav>
            <ul className={`${style.header_list}`}>
                {menu.map((item, index) => (
                    <li key={item.path || item.name || index}>
                        <Link className={style.header__link} to={item.path}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
};

export default MenuList;
