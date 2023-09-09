import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Product from "./components/Products/Products"
import AppContext from "./utils/context";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <AppContext>
       <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
          </Routes>
       <Footer/>   
       </AppContext>
       </BrowserRouter>
    </div>
  );
}

export default App;
