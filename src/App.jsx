import { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import "./styles/Gallery.css";
import "./styles/Contact.css";
import "./styles/Large-screen.css";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Preorder from "./components/Preorder";
import Footer from "./components/Footer";
import Media from "./components/Media";

function App() {
  const images = import.meta.glob("./assets/images/img*.jpg", { eager: true });
  const imageList = Object.values(images);
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
      <Header />
      <About />
      <Features />
      <Media imageList={imageList} />
      <Preorder />
      <Footer />
    </div>
  );
}

export default App;
