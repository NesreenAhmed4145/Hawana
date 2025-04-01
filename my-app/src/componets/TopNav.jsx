import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
        <img src="/assets/logo.png" alt="Hawana" style={{ height: "50px" }} />
        {/* C:\Users\anesr\OneDrive\Desktop\hh\my-app\public\assets\logo.jpg */}
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
              <a className="nav-link" href="#" style={{ color: "#ff69b4" ,fontSize: "22px"} }>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#ff69b4" ,fontSize: "22px" }}>Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#ff69b4" ,fontSize: "22px"}}>Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#ff69b4" ,fontSize: "22px"}}>Cart</a>
            </li>

            {/* Shopping Cart Icon */}
            <li className="nav-item position-relative">
              <a className="nav-link" href="#" style={{ color: "#ff69b4" }}>
                <FaShoppingCart size={30} />
                <span className="badge bg-dark position-absolute top--10 start-100 translate-middle">
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
