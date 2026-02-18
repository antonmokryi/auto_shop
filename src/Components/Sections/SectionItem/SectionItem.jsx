import React, {useState} from 'react';
import {FaChevronDown} from "react-icons/fa";
import style from "./SectionItem.module.css";
import {useNavigate} from "react-router-dom";

const SectionItem = ({section}) => {
    const [itemList, setItemList] = useState(false)
    const navigate = useNavigate();
    const handleSetNavigateCategory = (category) =>{
        navigate(`/catalog?category=${category}`)
    }
    return (
        <li className={style.item} onClick={() => setItemList(!itemList)}>
            <div>
                <h4>{section.name}</h4>
                {section.list ? <FaChevronDown/> : null}
            </div>
            <ul className={style.ItemCategoryList}>
                {itemList
                    ? section.list.map((item, index) => (
                        <li key={index}
                            className={style.ItemCategory}
                            onClick={()=>{
                                handleSetNavigateCategory(item)
                            }}>{item}</li>
                    ))
                    : null}
            </ul>
        </li>
    );
};

export default SectionItem;