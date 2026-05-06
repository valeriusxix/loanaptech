import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Loan Aptech</h2>
            <p>Your trusted partner for fast, transparent, and affordable loans solutions.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/loanproducts">Loan Products</Link></li>
              <li><Link to="/apply">Apply Now</Link></li>
              <li><Link to="/about">About us</Link></li>
            </ul>
          </div>

           <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
         <h3>Get In Touch</h3>
            <p>support@loanaptech.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Mon-Fri: 9AM-6PM EST </p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Loan Aptech. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default footer;