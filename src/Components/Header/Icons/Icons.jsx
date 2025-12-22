import React from 'react';
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import style from "./Icons.module.css";

const Icons = () => {
    return (
            <div className={style.icons}>
                <FaSearch className={style.search}/>
                <HiShoppingCart className={style.basket} />
            </div>
    );
};

export default Icons;