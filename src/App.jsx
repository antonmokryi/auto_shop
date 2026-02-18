import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Page404 from "./Components/Page404/Page404.jsx";
import ProductPage from "./Components/ProductPage/ProductPage.jsx";
import CreateOrder from "./Components/CreateOrder/CreateOrder.jsx";
import SuccessfulOrder from "./Components/SuccessfulOrder/SuccessfulOrder.jsx";
import Contact from "./Components/Contact/Contact.jsx";

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/product_page/:id" element={<ProductPage/>}/>
            <Route path="create_order" element={<CreateOrder/>}/>
            <Route path={"successful_order"} element={<SuccessfulOrder/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path="*" element={<Page404/>}/>
        </Route>
    </Routes>
  )
}

export default App
