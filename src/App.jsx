import { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import "./styles/Gallery.css";
import "./styles/Contact.css";
import logo from "./assets/sc-logo.svg";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  const images = import.meta.glob("./assets/images/img*.jpg", { eager: true });
  const imageList = Object.values(images);
  const parentDiv = useRef(null);
  const [showSideBar, setShowSideBar] = useState(false);

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
        <div className="heroBackground"></div>
        <div className="overlay"></div>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="sc-logo"></img>
            <h1>Silent Creed</h1>
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
          </ul>
          <button
            onClick={() => setShowSideBar((prev) => !prev)}
            className="burger-btn"
          >
            <span className="material-symbols-outlined burger-icon">
              swords
            </span>
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
                <a
                  onClick={() => setShowSideBar((prev) => !prev)}
                  href="#about"
                >
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
                <a
                  onClick={() => setShowSideBar((prev) => !prev)}
                  href="#media"
                >
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
        <Gallery imageList={imageList} />
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
        <Contact id="contact"></Contact>
      </footer>
    </div>
  );
}

export default App;
