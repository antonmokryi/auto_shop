import React from 'react';
import SectionItem from "./SectionItem/SectionItem.jsx";
import sectionData from "../../data/sections.js";
import style from "./sections.module.css";
const Sections = () => {
    return (
        <section className={style.sections}>
            <h2>Категорії:</h2>
            <ul className={style.desktopList}>
                {sectionData.map((section, index) => (
                    <SectionItem key={index} section={section} />
                ))}
            </ul>
            <div className={style.mobileList}>
                {sectionData.map((section, index) => (
                    <SectionItem key={index} section={section} />
                ))}
            </div>
        </section>
    );
};

export default Sections;