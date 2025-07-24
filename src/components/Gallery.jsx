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

  return (
    <div className="carousel-container">
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
