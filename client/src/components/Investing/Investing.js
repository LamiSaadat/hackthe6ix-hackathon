import "./Investing.scss";
import Carousel from "../Carousel/Carousel";
import rightArrow from "../../assets/icons/right-arrow.png";
import leftArrow from "../../assets/icons/left-arrow.png";

function Investing() {
  return (
    <section className="investing">
      <h2 className="investing__title">Investing 101</h2>
      <Carousel />
      <div>
        <img src={leftArrow} className="investing__arrow"></img>
        <img src={rightArrow} className="investing__arrow"></img>
      </div>
    </section>
  );
}

export default Investing;
