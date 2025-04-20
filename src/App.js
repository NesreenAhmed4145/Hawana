import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer/Footer";

// Pages
import Register from './pages/Register';
import Home from './pages/Home';
import LoginForm from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


const TitleUpdater = () => {
  useEffect(() => {
    document.title = "هوانا | Hawana"; 
  }, []);

  return null; 
};

const App = () => {
  return (
    <Router>
      <div className="app-container" style={{ backgroundColor: '#f2f1ea', minHeight: '100vh' }}>
        <TitleUpdater />
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
