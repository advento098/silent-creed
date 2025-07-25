import { useState } from "react";
import logo from "../assets/sc-logo.svg";

export default function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <header className="hero" id="hero">
      <div className="heroBackground"></div>
      <div className="overlay"></div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="sc-logo"></img>
          <h1>Anthaira Studios</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#media">Media</a>
          </li>
          <li>
            <a href="#preorder" className="cta">
              Pre-Order
            </a>
          </li>
          <li>
            <a href="#contact" className="cta">
              Contact Us
            </a>
          </li>
        </ul>
        <button
          onClick={() => setShowSideBar((prev) => !prev)}
          className="burger-btn"
        >
          <span className="material-symbols-outlined burger-icon">swords</span>
        </button>
      </nav>

      <div className={`side-bar ${showSideBar ? "show" : ""}`}>
        <div>
          <button
            onClick={() => setShowSideBar((prev) => !prev)}
            className="burger-btn"
          >
            <span className="material-symbols-outlined burger-icon">
              sword_rose
            </span>
          </button>
          <ul className="side-bar-links">
            <li>
              <a onClick={() => setShowSideBar((prev) => !prev)} href="#about">
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowSideBar((prev) => !prev)}
                href="#features"
              >
                Features
              </a>
            </li>
            <li>
              <a onClick={() => setShowSideBar((prev) => !prev)} href="#media">
                Media
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowSideBar((prev) => !prev)}
                href="#preorder"
                className="cta"
              >
                Pre-Order
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowSideBar((prev) => !prev)}
                href="#contact"
                className="cta"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-content fade-in">
        <h1>Silent Creed</h1>
        <p>Forge your legacy in a world of chaos, secrets, and vengeance.</p>
        <a href="#trailer" className="btn-primary">
          Watch Trailer
        </a>
      </div>
    </header>
  );
}
