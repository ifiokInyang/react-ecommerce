import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Product from './components/Product';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Pay from './pages/Pay';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import Success from './pages/Success';


function App() {
  return (
    <React.Fragment>
        <Router>
            <Routes>
              <Route path="/" element={<Home /> }/>
              <Route path="/success" element={<Success />}/>
              <Route path="/single-product" element={<SingleProduct /> }/>
              <Route path="/register" element={<Register /> }/>
              <Route path="/product-list" element={<ProductList /> }/>
              <Route path="/pay" element={<Pay /> }/>
              <Route path="/login" element={<Login /> }/>
              <Route path="/cart" element={<Cart /> }/>
              <Route path="/product" element={<Product /> }/>
            </Routes>
        </Router>
    </React.Fragment>
  );
}

export default App;
