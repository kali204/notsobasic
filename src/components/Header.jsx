// src/components/Header.jsx
import React from "react";
import "../styles/Header.css"

function Header() {
  return (
    <header>
      <figure className="logo">
        <img src="./images/logo.png" alt="Cafe Logo" />
      </figure>
      <nav className="main-nav">
        <ul>
          <li><a href="#">Coffee</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
