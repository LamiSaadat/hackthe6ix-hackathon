import "./Home.scss";
import "../../App.scss";
import { Link } from "react-router-dom";

import hero from "../../assets/images/homepage-hero.png";
import Language from "../../components/Language/Language";
<<<<<<< HEAD
import Options from "../../components/Options/Options";
=======
import PersonalFinance from "../../components/PersonalFinance/PersonalFinance";
import FinanceDefinition from "../../components/FinanceDefinition/FinanceDefinition";
>>>>>>> develop

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
            <h3 className="hero__subhead">New to Canada?</h3>
            <Link to="/" className="button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Language />
<<<<<<< HEAD
      <Options />
=======
      <PersonalFinance />
      <FinanceDefinition />
>>>>>>> develop
    </>
  );
}

export default Home;
