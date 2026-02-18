import React, {useState} from 'react';
import style from './Header.module.css';
import Logo from "./Logo/Logo.jsx";
import MenuList from "./MenuList/MenuList.jsx";
import Icons from "./Icons/Icons.jsx";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";
import MenuMobileList from "./MenuMobileList/MenuMobileList.jsx";

const Header = () => {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    return (
        <header className={style.header}>
            <div className={`${style.header_block} container`}>
                <Logo/>
                <MenuList/>
                <BurgerMenu setActiveMobileMenu={setActiveMobileMenu}/>
                <Icons/>
            </div>
            {activeMobileMenu && <MenuMobileList setActiveMobileMenu={setActiveMobileMenu}/>}


        </header>
    );
};

export default Header;
