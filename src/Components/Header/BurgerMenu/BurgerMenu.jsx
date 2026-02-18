import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./BurgerMenu.module.css";

const BurgerMenu = ({setActiveMobileMenu}) => {
    return (
        <button
            type="button"
            aria-label="Open меню"
            onClick={() => setActiveMobileMenu(prev => !prev)}
            className={style.burgerButton}
        >
            <GiHamburgerMenu />
        </button>
    );
};

export default BurgerMenu;
