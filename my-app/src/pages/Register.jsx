import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-mask-plugin';
import './style.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const RegistrationForm = () => {
  useEffect(() => {
    $('#phone-number').mask('(000) 000-0000');
  }, []);

  return (
    <div className="form">
      <form>
        <div className="form-icon">
          <span>
            <i className="fas fa-user"></i> 
          </span>
        </div>

        <div className="form-group">
          <input type="text" className="form-control item" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control item" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control item" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <input type="date" className="form-control item" id="birth-date" placeholder="Birth Date" />
        </div>

        <div className="form-group">
          <button type="button" className="button">
            Create Account
          </button>
        </div>
      </form>

      <div className="social-media">
        <h5>Sign up with social media</h5>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook" title="Facebook"></i></a>
          <a href="#"><i className="fab fa-google" title="Google"></i></a>
          <a href="#"><i className="fab fa-twitter" title="Twitter"></i></a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
