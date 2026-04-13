import React from "react";
import "./footer.css";

const Footer = () => {
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
              <li><a href="/">Home</a></li>
              <li><a href="/loanproducts">Loan Products</a></li>
              <li><a href="/apply">Apply Now</a></li>
              <li><a href="/about">About us</a></li>
            </ul>
          </div>

           <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
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

export default Footer;