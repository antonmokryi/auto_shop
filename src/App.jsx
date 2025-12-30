import './App.css'
import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import HeroCatalog from "./Components/HeroCatalog/HeroCatalog.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Products from "./Components/Products/Products.jsx";
import ProductPage from "./Components/ProductPage/ProductPage.jsx";
import Contact from "./Components/Contact/Contact.jsx";
function App() {

  return (
    <div className='container'>
        <Header />
        <main>
            {/*<Hero/>*/}
            {/*<HeroCatalog/>*/}
            {/*<ProductPage/>*/}
            {/*<Contact/>*/}
            <Products/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
