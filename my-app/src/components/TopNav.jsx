import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo.png" alt="Hawana" style={{ height: "50px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home" style={{ color: "#ff69b4", fontSize: "18px" }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop" style={{ color: "#ff69b4", fontSize: "18px" }}>Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" style={{ color: "#ff69b4", fontSize: "18px" }}>Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ color: "#ff69b4" }}>
                <FaUser size={22} />
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart" style={{ color: "#ff69b4" }}>
                <FaShoppingCart size={25} />
                <span className="badge bg-dark position-absolute top--10 start-100 translate-middle" style={{ color: "white" }}>
                  3
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
