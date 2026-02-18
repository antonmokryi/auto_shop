import React from 'react';
import "../../../index.css";
import style from "./Filter.module.css";
import FilterView from "./FilterView/FilterView.jsx";
import FilterSort from "./FilterSort/FilterSort.jsx";
const Filter = () => {
    return (
        <section className={style.filter}>
            <div className={` ${style.filter__content}`}>
                <FilterSort/>
                <FilterView/>
            </div>
        </section>
    );
};

export default Filter;
