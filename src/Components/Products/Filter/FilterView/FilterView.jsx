import React from 'react';
import { TfiViewList } from "react-icons/tfi";
import { HiOutlineViewGrid } from "react-icons/hi";
import style from "./FilterView.module.css";

const FilterView = () => {
    return (
        <section className={style.filterView}>
            <label htmlFor="">Вид:</label>
            <div className={style.filterView__content}>
                <button>
                    <HiOutlineViewGrid />
                </button>
                <button>
                    <TfiViewList />
                </button>
            </div>
        </section>
    );
};

export default FilterView;