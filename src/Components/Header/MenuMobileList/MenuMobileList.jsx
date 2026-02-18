import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import menu from "../../../data/HeaderMenu.js";
import style from "./MenuMobileList.module.css";
import { Link } from "react-router-dom";


const MenuMobileList = ({ setActiveMobileMenu }) => {
    return (
        <div className={style.menu}>
            <button
                type="button"
                aria-label="Close меню"
                className={style.closeButton}
                onClick={() => setActiveMobileMenu(false)}
            >
                <RiCloseLargeLine/>
            </button>

            <ul className={style.menuList}>
                {menu.map((item, index) => (
                    <li key={item.path || item.name || index}>
                        <Link
                            to={item.path}
                            className={style.menuList__item}
                            onClick={() => setActiveMobileMenu(false)}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuMobileList;
