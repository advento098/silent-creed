import { useState, useRef } from "react";

export default function Gallery({ imageList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };

  const scrollToIndex = (index) => {
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < imageList.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="buttons">
        <button
          onClick={handlePrev}
          className={`left-button ${currentIndex === 0 ? "hide" : ""}`}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button
          onClick={handleNext}
          className={`right-button ${
            currentIndex === imageList.length - 1 ? "hide" : ""
          }`}
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div className="media-carousel" onScroll={handleScroll} ref={scrollRef}>
        {imageList.map((image, idx) => (
          <div key={idx} className="carousel-slide">
            <img src={image.default || image} alt={`media-${idx + 1}`} />
          </div>
        ))}
        <div className="carousel-indicators">
          {imageList.map((_, idx) => (
            <div
              key={idx}
              className={`diamond ${currentIndex === idx ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
