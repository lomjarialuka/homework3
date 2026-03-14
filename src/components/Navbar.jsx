import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">♟</span>
        <span className="logo-text">ChessMasters</span>
      </div>
      <div className="navbar-links">
        <a href="#cards">ქარდები</a>
        <a href="#about">შესახებ</a>
        <button
          className="nav-btn"
          onClick={() => window.open("https://lichess.org", "_blank")}
        >
          Lichess-ზე თამაში ↗
        </button>
      </div>
    </nav>
  );
}

export default Navbar;