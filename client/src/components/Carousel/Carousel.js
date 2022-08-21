import "./Carousel.scss";
import { useEffect, useState } from "react";
import rightArrow from "../../assets/icons/right-arrow.png";
import leftArrow from "../../assets/icons/left-arrow.png";

function Carousel({ borderColor, data }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  return (
    <section className="carousel">
      {data.map((account, index) => {
        if (slideIndex === index + 1) {
          return (
            <article
              className={
                slideIndex === index + 1
                  ? "carousel__slide active-anim"
                  : "carousel__slide"
              }
              key={account.id}
            >
              <div className={`carousel__border-${borderColor}`}></div>
              <h4 className="carousel__title">{capitalize(account.type)}</h4>
              <p className="carousel__text">{account.description}</p>
            </article>
          );
        }
      })}
      <div>
        <img
          src={leftArrow}
          className="carousel__arrow"
          onClick={prevSlide}
        ></img>
        <img
          src={rightArrow}
          className="carousel__arrow"
          onClick={nextSlide}
        ></img>
      </div>
    </section>
  );
}

export default Carousel;
