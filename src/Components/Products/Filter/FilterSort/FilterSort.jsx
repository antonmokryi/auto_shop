import React from 'react';
import style from "../Filter.module.css";
import {useProductStore} from "../../../../app/store/useProductStore.js";

const FilterSort = () => {
    const {setSortType} = useProductStore()
    const handleSort = (e) => setSortType(e.target.value)
    return (
        <div className={style.sort}>
            <label htmlFor="sort">Сортувати за: </label>
            <select id="sort" className={style.filter__select} onChange={handleSort}>
                <option value="" hidden>Оберіть...</option>
                <option value={"Зростанням ціни"}>Зростанням ціни</option>
                <option value={"Спаданням ціни"}>Спаданням ціни</option>
            </select>
        </div>
    );
};

export default FilterSort;