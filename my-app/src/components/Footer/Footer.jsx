import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { 
  FaFacebookF, FaXTwitter, FaInstagram, FaSnapchatGhost, FaTiktok, FaWhatsapp, FaEnvelope, FaPhoneAlt 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Contact Info (Stacked Block Format) */}
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center gap-2">
            <FaPhoneAlt color="#ff69b4" size={20} /> {/* Changed to Phone Icon */}
            <span className="contact-info" style={{ color: "white" }}>+1 555-555-5556</span>
          </div>
          <div className="d-flex align-items-center gap-2 mt-2">
            <FaEnvelope color="#ff69b4" size={20} />
            <span className="contact-info" style={{ color: "white" }}>info@yourcompany.example.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.tiktok.com/@hawana_sa?_t=8lHPyXC4tHB&_r=1" className="circle" target="_blank">
            <FaTiktok className="social-icon" />
          </a>
          <a href="https://www.snapchat.com/add/hawana.sa?share_id=FCiUBDlBuJ0&locale=ar-EG" className="circle" target="_blank">
            <FaSnapchatGhost className="social-icon" />
          </a>
          <a href="https://www.instagram.com/hawana_sa/?igsh=MW43cTB1Nm1pOWdiYw%3D%3D#" className="circle" target="_blank">
            <FaInstagram className="social-icon" />
          </a>
          <a href=" +966 55 206 2099" className="circle">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-3" style={{ color: "white" }}>
        <p>&copy; {new Date().getFullYear()} Hawana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
