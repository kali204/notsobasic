import React, { useState, useEffect, useCallback } from "react";
import "../styles/Carousel.css";

const slides = [
  {
    id: 0,
    backgroundColor: "#9c4d2f",
    title: "Caffe Latte",
    price: "₹ 220",
    description: "A smooth and creamy blend of freshly brewed espresso combined with steamed milk and topped with froth.",
    imgSrc: "/images/1.png",
  },
  {
    id: 1,
    backgroundColor: "#f5bfaf",
    title: "Strawberry Mocha",
    price: "₹ 220",
    description: "Fusion of chocolate, fresh strawberries, and espresso, topped with milk. A refreshing treat.",
    imgSrc: "/images/2.png",
  },
  {
    id: 2,
    backgroundColor: "#dedfe1",
    title: "Doppio Espresso",
    price: "₹ 220",
    description: "An intense, double shot of espresso with bold flavors and rich aroma to invigorate your senses.",
    imgSrc: "/images/3.png",
  },
  {
    id: 3,
    backgroundColor: "#7eb63d",
    title: "Matcha Latte Macchiato",
    price: "₹ 220",
    description: "Premium matcha green tea with steamed milk and espresso. A bold and refreshing twist.",
    imgSrc: "/images/4.png",
  },
];

function Carousel() {
  const [active, setActive] = useState(1); // Default active slide index
  const countItem = slides.length;

  // Calculate indices for other_1 and other_2 slides based on active
  const other_1 = (active - 1 + countItem) % countItem;
  const other_2 = (active + 1) % countItem;

  // Change slide handlers
  const goNext = useCallback(() => {
    setActive(prev => (prev + 1) % countItem);
  }, [countItem]);

  const goPrev = useCallback(() => {
    setActive(prev => (prev - 1 + countItem) % countItem);
  }, [countItem]);

  // Auto play interval setup
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [goNext]);

  return (
    <section className={`carousel ${active === 0 ? "prev" : "next"}`}>
      <div className="list">
        {slides.map((slide, index) => {
          let className = "item";
          if (index === active) className += " active";
          else if (index === other_1) className += " other_1";
          else if (index === other_2) className += " other_2";

          return (
            <article key={slide.id} className={className}>
              <div className="main-content" style={{ backgroundColor: slide.backgroundColor }}>
                <div className="content">
                  <h2>{slide.title}</h2>
                  <p className="price">{slide.price}</p>
                  <p className="description">{slide.description}</p>
                  <button className="addToCard">Add To Cart</button>
                </div>
              </div>
              <figure className="image">
                <img src={slide.imgSrc} alt={slide.title} />
                <figcaption>{slide.title}</figcaption>
              </figure>
            </article>
          );
        })}
      </div>

      <div className="arrows">
        <button id="prev" aria-label="Previous Slide" onClick={goPrev}>&lt;</button>
        <button id="next" aria-label="Next Slide" onClick={goNext}>&gt;</button>
      </div>
    </section>
  );
}

export default Carousel;
