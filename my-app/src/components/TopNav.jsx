import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Imported FaUser

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="/assets/logo.png" alt="Hawana" style={{ height: "50px" }} />
        </a>

        {/* Navbar Toggle for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#ff69b4", fontSize: "18px" }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="my-app\src\pages\Shop.jsx" style={{ color: "#ff69b4", fontSize: "18px" }}>Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#ff69b4", fontSize: "18px" }}>Cart</a>
            </li>

            {/* Person Icon for Login */}
            <li className="nav-item">
              <a className="nav-link" href="my-app\src\pages\Login.jsx" style={{ color: "#ff69b4" }}>
                <FaUser size={22} />
              </a>
            </li>

            {/* Shopping Cart Icon */}
            <li className="nav-item position-relative">
              <a className="nav-link" href="#" style={{ color: "#ff69b4" }}>
                <FaShoppingCart size={25} />
                <span className="badge bg-dark position-absolute top--10 start-100 translate-middle" style={{ color: "white" }}>
                  3
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
