import React, { useState } from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import ForgotPassword from './ForgotPassword'; // Import ForgotPassword component

const LoginForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => setIsModalOpen(true); // Function to open the modal
  const closeModal = () => setIsModalOpen(false); // Function to close the modal

  return (
    <div className="form">
      <form>
        <div className="form-icon">
          <span>
            <i className="fas fa-lock"></i>
          </span>
        </div>

        <div className="form-group">
          <input type="email" className="form-control item" id="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <input type="password" className="form-control item" id="password" placeholder="Password" />
        </div>

        <div className="form-group d-flex justify-content-between align-items-center" style={{ marginBottom: '10px' }}>
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" style={{ marginLeft: '5px', fontSize: '14px' }}>Remember me</label>
          </div>
          <button
            type="button"
            style={{ fontSize: '14px', color: 'rgb(229, 38, 150)', background: 'none', border: 'none', textDecoration: "underline" }}
            onClick={openModal}
          >
            Forgot password?
          </button>
        </div>

        <div className="form-group">
          <button type="button" className="button">
            Login
          </button>
        </div>

        {/* Link to Registration Form */}
        <div className="form-group text-center" style={{ marginTop: '10px' }}>
          <p>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: 'rgb(229, 38, 150)', fontWeight: 'bold' }}>
              Create one
            </Link>
          </p>
        </div>
      </form>

      {/* Social Media Login */}
      <div className="form">
  <div className="social-media">
    <h5>Login with social media</h5>
    <div className="social-icons">
      <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
      <a href="#" className="google"><i className="fab fa-google"></i></a>
      <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
    </div>
  </div>
</div>


      {/* Render ForgotPassword Modal */}
      {isModalOpen && <ForgotPassword closeModal={closeModal} />}
    </div>
  );
};

export default LoginForm;
