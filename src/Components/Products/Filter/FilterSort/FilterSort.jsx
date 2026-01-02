import React from 'react';
import style from "../Filter.module.css";

const FilterSort = () => {
    return (
        <div className={style.sort}>
            <label htmlFor="sort">Сортувати за: </label>
            <select id="sort" className={style.filter__select}>
                <option>Зростанням ціни</option>
                <option>Спаданням ціни</option>
            </select>
        </div>
    );
};

export default FilterSort;