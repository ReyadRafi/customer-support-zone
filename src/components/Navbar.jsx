import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">CS — Ticket System</div>
        <div className="nav-right">
          <ul className="menu">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
          </ul>
          <button className="btn btn-primary">+ New Ticket</button>
        </div>
      </div>
    </nav>
  );
}
