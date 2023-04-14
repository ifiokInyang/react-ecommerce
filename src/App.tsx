import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
  const user = true; // replace with your authentication state

  return (
    <React.Fragment>
      <Router>
        <Routes>
          {/* Redirect non-logged-in user to login page */}
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

          {/* Allow logged-in user to access all other routes */}
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/success" element={<Success />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
            </>
          ) : null}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;