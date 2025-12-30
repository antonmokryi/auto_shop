import React from 'react';
import style from './LoadMore.module.css';
const LoadMore = ({text, loadMoreProducts}) => {
    return (
        <div className={style.loadMore}>
            <button  className={style.loadMore_btn} onClick={loadMoreProducts}>
                {text}
            </button>
        </div>
    );
};

export default LoadMore;