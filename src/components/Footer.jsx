import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h4>CS — Ticket System</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. 
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h5>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li>Products</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h5>Information</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}
