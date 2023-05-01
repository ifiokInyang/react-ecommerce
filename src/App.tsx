import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Product from './components/Product';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import Success from './pages/Success';
import { UserDetails } from './redux/userRedux';

function App() {
  const user = useSelector(UserDetails); // replace with authentication state
console.log("user is ", user)
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {/* Redirect non-logged-in user to login page */}
          <Route
            path="/login"
            element={user.currentUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user.currentUser ? <Navigate to="/" /> : <Register />}
          />

          {/* Allow logged-in user to access all other routes */}
          {user.currentUser ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/success" element={<Success />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
            </>
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;