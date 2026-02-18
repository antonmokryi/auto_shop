import React, {useEffect, useState} from 'react';
import {getData} from '../../api/product_api.js';
import Loader from "../../Components/Loader/Loader.jsx";
import ProductItem from "./ProductItem/ProductItem.jsx";
import style from "./Products.module.css";
import LoadMore from "./LoadMore/LoadMore.jsx";
import "../../index.css";
import Sections from "../Sections/Sections.jsx";
import Filter from "./Filter/Filter.jsx";
import {useProductStore} from "../../app/store/useProductStore.js";
import ErrorConnect from "./ErrorConnect/ErrorConnect.jsx";
import Parameters from "./Parametrs/Parameters.jsx";
import createPrice from "../../data/info.js";
import ParametersButtonMobile from "./Parametrs/ParametersButtonMobile.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const Products = () => {
    const [visileCount, setVisileCount] = useState(20)
    const [error, setError] = useState(false)
    const [visibleParameters, setVisibleParameters] = useState(false)
    const {products, isLoading, setProducts, minPrice, maxPrice, setIsLoading, productGroup, sortType} = useProductStore()
    const [finalProductsList, setFinalProductsList] = useState([])
    const location = useLocation();
    const navigate = useNavigate();

    const loadMore = () => {
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
                setError(true)
            } finally {
                setIsLoading(false)
            }
        };
        fetchProducts();

        return () => {
            controller.abort()
        }
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryFromUrl = queryParams.get("category") || "";

        let filtered = products;

        if (categoryFromUrl) {
            filtered = filtered.filter(product => product.ua.group === categoryFromUrl);
        }

        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || Infinity;

        filtered = filtered.filter(product => createPrice(product.itemPrice) >= min && createPrice(product.itemPrice) <= max);

        if (sortType === "Зростанням ціни") {
            filtered.sort((a, b) => a.itemPrice - b.itemPrice);
        } else if (sortType === "Спаданням ціни") {
            filtered.sort((a, b) => b.itemPrice - a.itemPrice)
        }

        setFinalProductsList(filtered)
    }, [products, location.search, sortType, minPrice, maxPrice])

    return (
        <section className={style.products}>
            <div className="container">
                <Filter/>
                {error
                    ? <ErrorConnect/>
                    : <div className={style.products_list}>
                        <aside className={style.sidebar}>
                            <Sections/>
                            <ParametersButtonMobile setVisibleParameters={setVisibleParameters}/>
                            {visibleParameters && <Parameters/>}
                        </aside>
                        <section className={style.productItems}>
                            {isLoading ? (<Loader/>) : (
                                finalProductsList.slice(0, visileCount).map((product, index) => (
                                    <ProductItem product={product} key={index}/>
                                ))
                            )}
                        </section>
                    </div>
                }
                {visileCount < finalProductsList.length &&
                    <LoadMore text={"Показати більше"} loadMoreProducts={loadMore}/>
                }
            </div>
        </section>
    );
};

export default Products;
