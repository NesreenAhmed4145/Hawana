import React, { useState } from 'react';
import './style.css';

const ForgotPassword = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setMessage('Password reset instructions sent to your email!');
    } else {
      setMessage('Please enter your email address.');
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="form-icon">
            <span>
              <i className="fas fa-key"></i>
            </span>
          </div>

          <h3 style={{ textAlign: 'center' }}>Forgot Password?</h3>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit" className="button">
              Reset Password
            </button>
          </div>

          {message && <div className="message">{message}</div>}

          <div className="form-group text-center">
            <p>
              Remember your password?{' '}
              <a
                href="/login"
                style={{ color: 'rgb(229, 38, 150)', fontWeight: 'bold' }}
                onClick={closeModal} // Close modal on login link click
              >
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
