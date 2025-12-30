import React, {useEffect, useState} from 'react';
import {getData} from '../../api/product_api.js';
import Loader from "../../Components/Loader/Loader.jsx";
import ProductItem from "./ProductItem/ProductItem.jsx";
import style from "./Products.module.css";

const Products = () => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        const controller = new AbortController()
        const fetchProducts = async () => {
            try {
                const data = await getData({signal: controller.signal});
                if (data && Array.isArray(data.records)) {
                    setProducts(data.records);
                    console.log(data.records)
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
        <section className={style.products} style={{backgroundColor: 'black', margin: "0 auto"}}>
            {loader ? (<Loader />) :(
                products.map((product, index) => (
                    <ProductItem product={product} key={index} />
            ))
                )}

        </section>
    );
};

export default Products;