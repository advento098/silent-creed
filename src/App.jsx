import React, { useEffect, useRef } from "react";
import "./App.css";
import sample1 from "./assets/sample1.png";
import sample2 from "./assets/sample1.png";
import sample3 from "./assets/sample1.png";
import heroBg from "./assets/background.jpg";

function App() {
  const parentDiv = useRef(null);

  useEffect(() => {
    const fadeElements = parentDiv.current
      ? [...parentDiv.current.querySelectorAll(":scope .fade-in")]
      : [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={parentDiv} className="App">
      <header className="hero" id="hero">
        <div className="heroBackground">
          <img src={heroBg} alt="silent-creed" />
        </div>
        <div className="overlay"></div>
        <nav className="navbar">
          <div className="logo">Silent Creed</div>
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
          </ul>
        </nav>
        <div className="hero-content fade-in">
          <h1>Rise from the Shadows</h1>
          <p>Forge your legacy in a world of chaos, secrets, and vengeance.</p>
          <a href="#trailer" className="btn-primary">
            Watch Trailer
          </a>
        </div>
      </header>

      <section id="about" className="section fade-in">
        <h2>About the Game</h2>
        <p>
          Experience a rich, stealth-driven adventure set in a collapsing
          empire. As a hidden warrior, rewrite history through blade and
          silence.
        </p>
      </section>

      <section id="features" className="section features fade-in">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature">⚔️ Stealth-Assassination Mechanics</div>
          <div className="feature">🌍 Expansive, Dynamic Open World</div>
          <div className="feature">🧠 Branching Storyline & Moral Choices</div>
          <div className="feature">🎮 Next-Gen Visuals and Ray Tracing</div>
        </div>
      </section>

      <section id="media" className="section fade-in">
        <h2>Media</h2>
        <div className="media-gallery">
          <img src={sample1} alt="screenshot 1" />
          <img src={sample2} alt="screenshot 2" />
          <img src={sample3} alt="screenshot 3" />
        </div>
      </section>

      <section id="preorder" className="section preorder fade-in">
        <h2>Pre-Order Now</h2>
        <p>Available on PC, PS5, and Xbox Series X</p>
        <a href="#" className="btn-primary">
          Pre-Order
        </a>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Anthaira Studios. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
