import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left-inner">
          <h4 className="footer-title">CS — Ticket System</h4>
          <p className="footer-subtitle">
            The CS — Ticket System is a centralized dashboard for managing all customer inquiries. It allows agents to efficiently view, track, and update the status of every support ticket, ensuring clear progress monitoring and enabling them to promptly mark issues as resolved.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h5 className="footer-title">Company</h5>
            <ul className="footer-subtitle">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="footer-title">Services</h5>
            <ul className="footer-subtitle">
              <li>Products</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h5 className="footer-title">Information</h5>
            <ul className="footer-subtitle">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h5 className="footer-title">Connect Us</h5>
            <ul className="footer-subtitle">
              <li>ⓕ Facebook</li>
              <li>𝕏 Twitter</li>
              <li>🅾 Instagram</li>
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
