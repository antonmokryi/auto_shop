import './App.css'
import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import HeroCatalog from "./Components/HeroCatalog/HeroCatalog.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {

  return (
    <div className='container'>
        <Header />
        <main>
            <Hero/>
            <HeroCatalog/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
