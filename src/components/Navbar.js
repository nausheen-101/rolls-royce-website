import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Rolls-Royce</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Models</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;