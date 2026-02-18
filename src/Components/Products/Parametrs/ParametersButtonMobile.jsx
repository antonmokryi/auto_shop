import React from 'react';
import { TbFilterDollar } from "react-icons/tb";
import style from "./parametrs.module.css"

const ParametersButtonMobile = ({setVisibleParameters}) => {
    return (
        <div className={style.mobileBtn}>
            <button onClick={()=>setVisibleParameters(prev=>!prev)}><TbFilterDollar/> Фільр по ціні</button>
        </div>
    );
};

export default ParametersButtonMobile;