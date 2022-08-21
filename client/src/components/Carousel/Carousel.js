import "./Carousel.scss";
import { useState } from "react";
import rightArrow from "../../assets/icons/right-arrow.png";
import leftArrow from "../../assets/icons/left-arrow.png";

function Carousel({ borderColor }) {
  //   const [slideIndex, setSlideIndex] = useState(1);
  //   const nextSlide = () => {
  //     if (slideIndex !== workData.length) {
  //       setSlideIndex(slideIndex + 1);
  //     } else if (slideIndex === workData.length) {
  //       setSlideIndex(1);
  //     }
  //   };

  //   const prevSlide = () => {
  //     if (slideIndex !== 1) {
  //       setSlideIndex(slideIndex - 1);
  //     } else if (slideIndex === 1) {
  //       setSlideIndex(workData.length);
  //     }
  //   };
  return (
    <section className="carousel">
      <article className="carousel__container">
        <div className={`carousel__border-${borderColor}`}></div>
        <h4 className="carousel__title">Mock h</h4>
        <p>Mock p</p>
      </article>
      <div>
        <img
          src={leftArrow}
          className="accounts__arrow"
          //   onClick={previousSlide}
        ></img>
        <img
          src={rightArrow}
          className="accounts__arrow"
          //   onClick={nextSlide}
        ></img>
      </div>
    </section>
  );
}

export default Carousel;
