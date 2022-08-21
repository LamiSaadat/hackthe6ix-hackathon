import "./Home.scss";
import "../../App.scss";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";
import Investing from "../../components/Investing/Investing";
import AccountTypes from "../../components/AccountTypes/AccountTypes";
import InvestmentTypes from "../../components/InvestmentTypes/InvestmentTypes";
import Taxes from "../../components/Taxes/Taxes";
import Language from "../../components/Language/Language";
import Options from "../../components/Options/Options";
import PersonalFinance from "../../components/PersonalFinance/PersonalFinance";
import FinanceDefinition from "../../components/FinanceDefinition/FinanceDefinition";

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
            <Link to="/" className="button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Language />
      <PersonalFinance />
      <FinanceDefinition />
      <Options />
      {/* <Investing /> */}
      <AccountTypes />
      <InvestmentTypes />
      {/* <Taxes /> */}
    </>
  );
}

export default Home;
