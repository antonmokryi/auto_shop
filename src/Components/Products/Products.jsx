import React, {useEffect, useState} from 'react';
import {getData} from '../../api/product_api.js';
import Loader from "../../Components/Loader/Loader.jsx";
import ProductItem from "./ProductItem/ProductItem.jsx";
import style from "./Products.module.css";
import LoadMore from "./LoadMore/LoadMore.jsx";

const Products = () => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const [visileCount, setVisileCount] = useState(20)

    const loadMore = () =>{
        setVisileCount(prev => prev + 20)
    }
    useEffect(() => {
        const controller = new AbortController()
        const fetchProducts = async () => {
            try {
                const data = await getData({signal: controller.signal});
                if (data && Array.isArray(data.records)) {
                    setProducts(data.records);
                } else {
                    setProducts([]);
                }
            } catch (error) {
                setProducts([]);
            }finally {
                setLoader(false)
            }
        };
        fetchProducts();

        return () =>{
            controller.abort()
        }
    }, []);

    return (
        <section className={style.products}>
            <div className={style.products_list}>
                {loader ? (<Loader />) :(
                    products.slice(0, visileCount).map((product, index) => (
                        <ProductItem product={product} key={index} />
                    ))
                )}
            </div>
            {visileCount < products.length &&
                <LoadMore text={"Показати більше"} loadMoreProducts={loadMore}/>
            }
        </section>
    );
};

export default Products;