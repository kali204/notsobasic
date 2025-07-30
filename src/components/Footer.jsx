// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css"
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2025 Not So Basic Cafe. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
