import React, {useState} from 'react';
import style from './parametrs.module.css';
import {useProductStore} from "../../../app/store/useProductStore.js";

const Parameters = () => {
    const {setMinPrice, setMaxPrice} = useProductStore()
    const [minimalPrice, setMinimalPrice] = useState("")
    const [maximalPrice, setMaximalPrice] = useState("")

    const handleSetPrice = () =>{
        setMinPrice(minimalPrice)
        setMaxPrice(maximalPrice)
    }

    const dropParameters = () =>{
        setMinPrice("")
        setMaxPrice("")
        setMinimalPrice("")
        setMaximalPrice("")
    }
    return (
        <aside className={style.parameters}>
            <h3>Ціна:</h3>
            <div className={style.inputs}>
                <label htmlFor="">Від:</label>
                <input type="text"
                       value={minimalPrice}
                       onChange={e => setMinimalPrice(e.target.value)}
                />

                <label htmlFor="">До:</label>
                <input type="text"
                       value={maximalPrice}
                       onChange={e => setMaximalPrice(e.target.value)}
                />
            </div>
            <div className={style.btns}>
                <button onClick={handleSetPrice}
                    className={style.btn}>Застосувати</button>
                <button onClick={dropParameters}
                    className={style.btn}>Скинути</button>
            </div>
        </aside>
    );
};

export default Parameters;