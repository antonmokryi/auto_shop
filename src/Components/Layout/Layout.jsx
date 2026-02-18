import React from 'react';
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import Basket from "../Basket/Basket.jsx";
import "../../App.css"
import {useBasketStore} from "../../app/store/useBasketStore.js";


const Layout = () => {
    const basketActive = useBasketStore(basket=>basket.isActive)
    return (
        <div className='app'>
            <Header/>
            <main className='main'>
                {basketActive && <Basket/>}
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
