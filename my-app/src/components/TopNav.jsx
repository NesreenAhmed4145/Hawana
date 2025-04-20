import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg topnav">
      <div className="container">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo.png" alt="Hawana" className="topnav-logo" />
        </Link>

        {/* Toggler on the right */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links & icons inside the collapse */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Center the links */}
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* User & Cart icons aligned to the right */}
          <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <Link className="nav-link icon-link" to="/login">
                <FaUser size={20} className="me-1" />
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link icon-link" to="/cart">
                <FaShoppingCart size={20} className="me-1" />
                <span className="cart-badge">3</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
