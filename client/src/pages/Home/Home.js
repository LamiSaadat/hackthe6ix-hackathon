import "./Home.scss";
import "../../App.scss";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <h2 className="hero__header">Investing made simple</h2>
        </div>
        <div className="hero__wrapper">
          <div className="hero__right">
            <img src={hero} alt="hero" className="hero__image" />
          </div>
          <div className="hero__left">
            <h2 className="hero__tablet">Investing made simple</h2>
            <h3 className="hero__subhead">New to Investing?</h3>
            <Link to="/language" className="button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
