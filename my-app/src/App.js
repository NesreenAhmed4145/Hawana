import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Register from './pages/Register';
import LoginForm from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import TopNav from "./components/TopNav";
import Footer from "./components/Footer/Footer";

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
        <TitleUpdater /> {/* This will handle title changes */}
        <TopNav />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
